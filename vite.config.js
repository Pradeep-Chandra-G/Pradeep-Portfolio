import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),

    // 🔹 Brotli compression for JS, CSS, HTML
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      deleteOriginFile: false, // keep original .js too
    }),

    // 🔹 Optimize and convert images (WebP/AVIF)
    ViteImageOptimizer({
      jpg: { quality: 75 },
      jpeg: { quality: 75 },
      png: { quality: 75 },
      webp: { quality: 100 },
      avif: { quality: 50 },
    }),
  ],

  build: {
    // 🔹 Better code-splitting
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },

    // 🔹 Minify with terser (smaller bundle)
    minify: "terser",

    // 🔹 Generate smaller source maps (optional)
    sourcemap: false,

    // 🔹 Aggressive chunk size warnings
    chunkSizeWarningLimit: 600,
  },

  server: {
    // 🔹 Faster HMR in dev
    headers: {
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  },

  preview: {
    // 🔹 Cache aggressively in production
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ["import", "global-builtin"],
      },
    },
  },
});
