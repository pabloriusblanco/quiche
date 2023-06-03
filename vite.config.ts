import { defineConfig } from "vite";
import EnvironmentPlugin from "vite-plugin-environment";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/quiche/",
  plugins: [react(), svgr(), EnvironmentPlugin(["API_URL", "ENVIROMENT"])],
  define: {
    // By default, Vite doesn't include shims for NodeJS necessary for segment analytics lib to work
    global: {},
  },
});
