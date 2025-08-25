import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    build: {
        outDir: 'assets', // compiled files output
        rollupOptions: {
            input: {
                'admin/js/settings': path.resolve(__dirname, 'src/admin-settings.tsx'),
                'frontend/js/frontend': path.resolve(__dirname, 'src/frontend.tsx')
            },
            output: {
                entryFileNames: "[name].js",
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name && assetInfo.name.endsWith(".css")) {
                        // Extract the base name of the CSS file
                        const name = path.basename(assetInfo.name);
                        return `admin/css/${name}`;
                    }
                    return "[name][extname]";
                },
            },
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})