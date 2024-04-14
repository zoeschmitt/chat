import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

import "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["../sw.js"],
  test: {
    include: ["tests/unit/**"],
    coverage: {
      reporter: ["text", "json-summary", "json"],
      reportOnFailure: true,
      include: ["src"],
    },
  },
});
