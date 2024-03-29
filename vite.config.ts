import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      "/cdn":
        "https://223e-2409-40e5-13-ab0c-bc98-1e0e-998a-1ac4.ngrok-free.app/",
      "/api": {
        target:
          "https://223e-2409-40e5-13-ab0c-bc98-1e0e-998a-1ac4.ngrok-free.app/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
