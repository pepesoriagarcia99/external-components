import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
        dev: false
      },
      emitCss: false
    }),
    dts({
      insertTypesEntry: true,
      include: ['src/main-wc.ts', 'src/modules/**/*.ts'],
      exclude: ['src/main-dev.ts', 'src/**/*.spec.ts', 'src/**/*.svelte']
    })
  ],
  build: {
    outDir: 'dist/lib-dynamic',
    minify: 'terser',
    terserOptions: {
      format: {
        comments: false
      }
    },
    lib: {
      entry: './src/main-wc.ts',
      name: 'Dynamic',
      fileName: 'index',
      formats: ['umd']
    },
    rollupOptions: {
      output: {
        entryFileNames: 'index.js',
        inlineDynamicImports: true,
        banner: undefined,
        footer: undefined
      }
    }
  }
});