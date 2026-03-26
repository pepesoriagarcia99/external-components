import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
export default defineConfig({
  define: {
    "process.env.NODE_ENV": '"production"',
    "process.env": {},
  },
  plugins: [
    vue({
      customElement: true,
    }),
  ],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
    },
    lib: {
      entry: "./src/main.ts",
      name: "CounterComponent",
      fileName: "wc-counter",
      formats: ["es"],
    },
    rollupOptions: {
      external: [],
    },
  },
});
