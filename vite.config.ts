import path from "path"
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { viteStaticCopy } from "vite-plugin-static-copy";
import type { Plugin } from "vite";
import type { OutputBundle } from "rollup";

/**
 * Rollup/Vite plugin to wrap a specific JS file in an IIFE after build.
 * @param targetFile - file name in output to wrap (e.g., "js/settings.js")
 */
export function wrapSpecificFileInIIFE(targetFile: string): Plugin {
    return {
        name: "wrap-specific-file-in-iife",
        generateBundle(_options: unknown, bundle: OutputBundle) {
            const chunk = bundle[targetFile];
            if (chunk && chunk.type === "chunk") {
                chunk.code = `(function(){\n${chunk.code}\n})();`;
            }
        },
    };
}
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        viteStaticCopy({
            targets: [
                {
                    src: "src/images/",   // source folder
                    dest: "./",            // destination inside "assets/"
                },
            ],
        }),
        wrapSpecificFileInIIFE("admin/js/settings"),
    ],
    build: {
        outDir: 'assets', // compiled files output
        rollupOptions: {
            input: {
                'admin/js/settings': path.resolve(__dirname, 'src/admin/adminSettings.tsx'),
                'frontend/js/frontend': path.resolve(__dirname, 'src/frontend/js/frontend.js'),
                'frontend/css/frontend': path.resolve(__dirname, 'src/frontend/css/frontend.scss'),
                "admin/js/product_image_badge": path.resolve(__dirname, "src/admin/js/ImageBadgeControls/product_image_badge.js"),
                "admin/js/image_upload": path.resolve(__dirname, "src/admin/js/ImageBadgeControls/image_upload.js"),
                "admin/js/badge_position": path.resolve(__dirname, "src/admin/js/ImageBadgeControls/badge_position.js"),
                "admin/css/product_badge": path.resolve(__dirname, "src/admin/css/product_badge.scss"),
            },
            output: {
                entryFileNames: "[name].js",
                assetFileNames: (assetInfo) => {
                    // Rollup 4+ uses `names` instead of deprecated `name`
                    const names = assetInfo.names || [];
                    const firstName = names[0] || ""; // handle array safely
                    if (firstName.endsWith(".css")) {
                        if (firstName.includes("settings")) {
                            // Force this CSS to admin/css folder
                            return "admin/css/settings.css";
                        }
                        // Preserve original output structure
                        return "[name].css";
                    }
                    return "[name][extname]";
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});