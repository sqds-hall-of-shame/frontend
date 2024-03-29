import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      "/cdn":
        "https://c284-2409-40e5-92-8134-d0b0-81dd-177e-58a1.ngrok-free.app/",
      "/api": {
        target:
          "https://c284-2409-40e5-92-8134-d0b0-81dd-177e-58a1.ngrok-free.app/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
