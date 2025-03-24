// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api": {
//         target: "http://localhost:5100/api",
//         // target: "https://clothing-store-ct6i.onrender.com/api",
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ""),
//         timeout: 10000,
//       },
//     },
//   },
// });

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api": {
//         // target: "https://clothing-store-ct6i.onrender.com/api",
//         target: "http://localhost:5100/api",

//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ""),
//         timeout: 10000,
//         secure: true, // Ensure HTTPS is enforced
//         configure: (proxy, options) => {
//           proxy.on("proxyReq", (proxyReq) => {
//             proxyReq.setHeader("Access-Control-Allow-Credentials", "true");
//           });
//         },
//       },
//     },
//     cors: {
//       origin: "http://localhost:5100",
//       credentials: true, // Ensure cookies are forwarded
//     },
//   },
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5100/api",
        //         // target: "https://clothing-store-ct6i.onrender.com/api",

        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        timeout: 10000,
        secure: false, // Set to false for localhost, true for production
        headers: {
          // Required headers for your API
          "Content-Type": "application/json",
          Accept: "application/json",
          // Security headers
          "X-Requested-With": "XMLHttpRequest",
          "X-Forwarded-Proto": "http", // or "https" in production
          // Custom headers if needed
          "X-Application-Source": "vite-dev-server",
        },
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq) => {
            // Modify or add headers to the outgoing request
            proxyReq.setHeader("Origin", "http://localhost:5173");
            proxyReq.setHeader("Access-Control-Allow-Credentials", "true");
            proxyReq.setHeader(
              "Referrer-Policy",
              "strict-origin-when-cross-origin"
            );
          });
          proxy.on("proxyRes", (proxyRes) => {
            // Ensure CORS headers are properly set in the response
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
    cors: false, // Disable Vite's built-in CORS as we're handling it via proxy
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[hash].[ext]",
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js",
      },
    },
  },
});
