// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        adam: resolve(__dirname, "adam/index.html"),
        adam1: resolve(__dirname, "adam1/index.html"),
        kristin: resolve(__dirname, "kristin/index.html"),
        hope: resolve(__dirname, "hope/index.html"),
        hopePartner: resolve(__dirname, "hope/partner.html"),
        hopeGive: resolve(__dirname, "hope/give.html"),
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
