import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: "client", // Set 'client' as root to match project structure
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
    },
  },
  build: {
    outDir: "dist", // Keep output inside client/
    emptyOutDir: true, // Clears old files before building
  },
  server: {
    port: 5000,
    open: true,
    host: "0.0.0.0",
    allowedHosts: "all",
  },
  base: "/", // Use "/" for Cloudflare Pages
});