import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5100/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        timeout: 10000,
        secure: false,
        headers: {
          // ✅ Removed forced Content-Type and Accept
          "X-Requested-With": "XMLHttpRequest",
          "X-Forwarded-Proto": "http",
          "X-Application-Source": "vite-dev-server",
        },
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq) => {
            proxyReq.setHeader("Origin", "http://localhost:5173");
            proxyReq.setHeader("Access-Control-Allow-Credentials", "true");
          });
          proxy.on("proxyRes", (proxyRes) => {
            proxyRes.headers["Access-Control-Allow-Origin"] =
              "http://localhost:5173";
            proxyRes.headers["Access-Control-Allow-Credentials"] = "true";
            proxyRes.headers["Access-Control-Allow-Methods"] =
              "GET, POST, OPTIONS";
            proxyRes.headers["Access-Control-Allow-Headers"] =
              "Content-Type, Authorization";
          });
        },
      },
    },
    cors: false,
  },
});
