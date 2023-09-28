import {defineConfig} from "vite";

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
});