import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      "/cdn":
        "https://add5-2409-40e5-13-8744-6ea6-d198-8d49-6030.ngrok-free.app/",
      "/api": {
        target:
          "https://add5-2409-40e5-13-8744-6ea6-d198-8d49-6030.ngrok-free.app/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
