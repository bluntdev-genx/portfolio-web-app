import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portfolio-web-app/",
  plugins: [react()],
  build: {
    sourcemap: true
  }
});
