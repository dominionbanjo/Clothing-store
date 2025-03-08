import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        // target: "http://localhost:5100/api",
        target: "https://clothing-store-ct6i.onrender.com/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        timeout: 10000,
      },
    },
  },
});
