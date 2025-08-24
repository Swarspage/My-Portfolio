import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/My-Portfolio/",
  publicDir: "public", // Ensure public directory is properly handled
  build: {
    rollupOptions: {
      // Ensure the PDF is copied to the output directory
      external: [],
    },
  },
});
