import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/assets/styles/abstracts/_colors.scss";
        @import "./src/assets/styles/abstracts/_mixins.scss";
        `,
      },
    },
  },
});
