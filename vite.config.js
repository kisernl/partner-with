// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        adam: resolve(__dirname, "adam/index.html"),
        kristin: resolve(__dirname, "kristin/index.html"),
        horizontal: resolve(__dirname, "horizontal/index.html"),
        horizontal_template: resolve(
          __dirname,
          "pw-horizontal-template/index.html"
        ),
        // add future PARTNERwith sites here copying Adam
        // to make resolve(__dirname, "adam/index.html")
      },
    },
  },
});
