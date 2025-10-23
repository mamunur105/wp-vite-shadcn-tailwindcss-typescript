// @ts-ignore
import path from "path"
// @ts-ignore
import tailwindcss from "@tailwindcss/vite";
// @ts-ignore
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
    plugins: [react(), tailwindcss()],
    build: {
        outDir: 'assets', // compiled files output
        rollupOptions: {
            input: {
                'admin/js/settings': path.resolve(__dirname, 'src/admin/adminSettings.tsx'),
                'frontend/js/frontend': path.resolve(__dirname, 'src/frontend/js/frontend.js'),
                'frontend/css/frontend': path.resolve(__dirname, 'src/frontend/css/frontend.scss')
            },
            output: {
                entryFileNames: "[name].js",
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name && assetInfo.name.endsWith(".css")) {
                        if (assetInfo.name === "settings.css") {
                            // force it to land inside admin/css/
                            return "admin/css/settings.css";
                        }
                        // keep original for others like admin/css/* or frontend/css/*
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