import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel([
            'esources/css/app.css',
            {
                scss: {
                    enabled: true,
                    files: ['resources/scss/app.scss'], // Add this line
                },
            },
        ]),
    ],
    build: {
        mode: 'production',
    },
});