import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  darkMode: "class",
  plugins: [react(), tailwindcss()],
  base: "/",  // 👈 ensures correct paths on Vercel

  build: {
    outDir: "dist",  // 👈 Vercel expects this folder
  },

  // 👇 Only apply proxy in development mode (not in production)
  server: mode === "development" ? {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  } : undefined,
}));
