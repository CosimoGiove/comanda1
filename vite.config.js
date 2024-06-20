import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel([
            'esources/css/app.css',
            {
                scss: {
                    enabled: true,
                    files: ['resources/scss/app.scss'],
                },
            },
        ]),
    ],
    build: {
        mode: 'production',
        css: {
            // Enable CSS optimization and compression
            optimize: true,
            // Include CSS files in the production build
            output: 'css/[name].css',
        },
    },
});