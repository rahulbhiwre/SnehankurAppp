import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: "client", // Set client as the root directory
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
    },
  },
  build: {
    outDir: "../dist", // Output build to dist outside client folder
    emptyOutDir: true, // Ensure old files are removed
  },
  server: {
    port: 8081,
    open: true,
  },
  base: "./", // Important for Cloudflare Pages deployment
});