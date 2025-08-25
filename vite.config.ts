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
                'admin/js/settings': path.resolve(__dirname, 'src/main.tsx'),
                'admin/css/settings': path.resolve(__dirname, 'src/main.scss'),
            },
            output: {
                // Output files exactly where you want
                entryFileNames: '[name].js',
                assetFileNames: '[name][extname]',
            },
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})