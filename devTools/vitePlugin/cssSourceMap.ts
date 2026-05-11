import path from "path";
import type { Plugin } from "vite";

/**
 * Generates CSS source map files for all CSS assets in the bundle.
 * For standalone SCSS entries: re-compiles the original SCSS and replaces
 * the CSS output so the source map mappings match exactly.
 * For CSS extracted from JS entries: generates a basic identity source map.
 *
 * @param scssEntries - Record of output CSS path (without extension) to source SCSS file path
 */
export function cssSourceMap(scssEntries: Record<string, string> = {}): Plugin {
    return {
        name: "css-source-map",
        apply: "build",
        async writeBundle(options) {
            const outDir = options.dir || "assets";
            const sass = await import("sass-embedded");
            const fs = await import("fs");
            const glob = await import("glob");

            const cssFiles = glob.sync("**/*.css", { cwd: path.resolve(outDir) });

            for (const cssFileName of cssFiles) {
                const cssFilePath = path.resolve(outDir, cssFileName);
                const mapFilePath = `${cssFilePath}.map`;

                // Skip if source map already exists
                if (fs.existsSync(mapFilePath)) {
                    continue;
                }

                const entryKey = cssFileName.replace(/\.css$/, "");
                const scssSrc = scssEntries[entryKey];

                if (scssSrc) {
                    // Standalone SCSS entry: compile with source maps
                    const result = sass.compile(path.resolve(scssSrc), {
                        sourceMap: true,
                        sourceMapIncludeSources: true,
                        style: "expanded",
                    });

                    if (result.sourceMap) {
                        // Rebase sources paths relative to the map file output directory
                        const mapDir = path.dirname(mapFilePath);
                        result.sourceMap.sources = result.sourceMap.sources.map(
                            (source: string) => {
                                const filePath = source.startsWith("file:")
                                    ? new URL(source).pathname
                                    : path.resolve(source);
                                return path.relative(mapDir, filePath);
                            }
                        );

                        // Replace CSS with sass-compiled output so map and CSS are in sync
                        const cssWithMapRef = `${result.css}\n/*# sourceMappingURL=${path.basename(mapFilePath)} */\n`;
                        fs.writeFileSync(cssFilePath, cssWithMapRef);
                        fs.writeFileSync(mapFilePath, JSON.stringify(result.sourceMap));
                    }
                } else {
                    // CSS extracted from JS entry: generate identity source map
                    const cssContent = fs.readFileSync(cssFilePath, "utf-8");
                    const lines = cssContent.split("\n");
                    const mappings = lines.map(() => "AACA").join(";");
                    const sourceMap = {
                        version: 3,
                        file: path.basename(cssFileName),
                        sources: [path.basename(cssFileName)],
                        sourcesContent: [cssContent],
                        mappings: "AAAA" + ";" + mappings.slice(5),
                    };
                    fs.writeFileSync(mapFilePath, JSON.stringify(sourceMap));

                    // Append sourceMappingURL to CSS file
                    if (!cssContent.includes("sourceMappingURL")) {
                        fs.writeFileSync(
                            cssFilePath,
                            `${cssContent}\n/*# sourceMappingURL=${path.basename(mapFilePath)} */\n`
                        );
                    }
                }
            }
        },
    };
}
