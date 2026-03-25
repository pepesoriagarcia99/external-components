import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
    plugins: [
        svelte({
            compilerOptions: {
                dev: true
            }
        })
    ],
    build: {
        target: 'esnext',
        rollupOptions: {
            input: './src/main-dev.ts'
        }
    },
    server: {
        port: 3001,
        open: true,
        watch: {
            usePolling: true
        }
    }
})