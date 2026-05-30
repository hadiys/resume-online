import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  // Set this to your repository name (e.g., '/hadi-portfolio/')
  // If you use a custom domain, set this to '/'
  base: "/resume-online/", 
  
  plugins: [
    react(), 
    tailwindcss()
  ],
  
  // Set root to the client directory.
  // Vite will automatically find 'index.html' inside this folder!
  root: path.resolve(__dirname, "client"),
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  
  build: {
    // Output to dist/public in the project root folder
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
  
  server: {
    port: 3000,
    host: true,
  },
});
