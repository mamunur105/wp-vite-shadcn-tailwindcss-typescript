import path from "path";
import type { Plugin } from "vite";

/**
 * Generates CSS source map files for all CSS assets in the bundle.
 * For standalone SCSS entries: compiles the original SCSS with source maps.
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
                        style: "compressed",
                    });

                    if (result.sourceMap) {
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
                }

                // Append sourceMappingURL to CSS file
                const cssContent = fs.readFileSync(cssFilePath, "utf-8");
                if (!cssContent.includes("sourceMappingURL")) {
                    fs.writeFileSync(
                        cssFilePath,
                        `${cssContent}\n/*# sourceMappingURL=${path.basename(mapFilePath)} */\n`
                    );
                }
            }
        },
    };
}
