import type { Plugin } from "vite";
import type { OutputBundle } from "rolldown";

/**
 * Wraps one or more specific JS files in an IIFE.
 *
 * @param targetFiles - A string or array of strings representing file names in the bundle
 */
export function wrapSpecificFilesInIIFE(targetFiles: string | string[]): Plugin {
    const files = Array.isArray(targetFiles) ? targetFiles : [targetFiles];
    return {
        name: "wrap-specific-files-in-iife",
        generateBundle(_options: unknown, bundle: OutputBundle) {
            for (const file of files) {
                const chunk = bundle[file];
                if (chunk && chunk.type === "chunk") {
                    chunk.code = `(() => {${chunk.code}})();`;
                }
            }
        },
    };
}
