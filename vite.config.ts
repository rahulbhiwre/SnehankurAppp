
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
    allowedHosts: ["all", "ba2e5091-1ee4-4f70-8b81-2c7d3840714c-00-3kjg6ujxw8qhw.janeway.replit.dev"],
  },
  base: "/", // Use "/" for Cloudflare Pages
});
