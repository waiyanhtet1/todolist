import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/graphql": {
        target: "https://todolistapp.hasura.app/v1",
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/graphql/, "/graphql"),
      },
    },
  },
});
