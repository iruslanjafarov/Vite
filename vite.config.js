import {defineConfig} from "vite";
import autoprefixer from "autoprefixer";

export default defineConfig({
    base: "./",
    build: {
        minify: true,
        sourcemap: true
    },
    server: {
        host: "0.0.0.0",
        port: "8888",
        open: true,
        hmr: true
    },
    css: {
        postcss: {
            plugins: [
                autoprefixer({})
            ],
        },
    }
});