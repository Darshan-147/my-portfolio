import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          "react-modules": ["react", "react-dom"],
          framer: ["framer-motion"],
          icons: ["react-icons"],
          emailjs: ["@emailjs/browser"],
        },
      },
    },
    // Minimize bundle size
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Source maps for production debugging
    sourcemap: false,
    // CSS minification
    cssCodeSplit: true,
  },
  // Performance: Enable asset inlining for small assets
  server: {
    preTransformRequests: true,
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "framer-motion",
      "react-icons",
      "@emailjs/browser",
    ],
  },
});
