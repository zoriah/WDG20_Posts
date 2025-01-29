import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/posts": {
        target: "http://localhost:8080/posts",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
