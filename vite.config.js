import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: "/src/app/",
      assets: "/src/assets/",
      components: "/src/components/",
      store: "/src/store/",
      shared: "/src/shared/",
    },
  },
});
