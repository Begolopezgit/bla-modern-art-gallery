import { resolveConfig } from "vite";
import { defineConfig } from "vite";
import { resolve } from "path";
export default defineConfig({
  base: "/bla-modern-art-gallery",

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        segunda: resolve(__dirname, "location.html"),
      },
    },
  },
});
