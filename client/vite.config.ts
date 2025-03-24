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
//       origin: "https://your-frontend-domain.com",
//       credentials: true, // Ensure cookies are forwarded
//     },
//   },
// });
