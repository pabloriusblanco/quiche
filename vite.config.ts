import { defineConfig } from "vite";
import EnvironmentPlugin from "vite-plugin-environment";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/quiche/",
  plugins: [
    react(),
    svgr(),
    EnvironmentPlugin([
      "API_URL",
      "ENVIROMENT",
      "AWS_USER_POOLS_WEB_CLIENT_ID",
      "OAUTH_DOMAIN",
      "AWS_PROJECT_REGION",
      "AWS_COGNITO_REGION",
      "AWS_USER_POOLS_ID",
    ]),
  ],
  define: {
    // By default, Vite doesn't include shims for NodeJS necessary for segment analytics lib to work
    // _global: {},
    global: "globalThis",
  },
});
