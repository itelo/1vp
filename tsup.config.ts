import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/cli.tsx"],
  format: "esm",
  target: "node18",
  platform: "node",
  banner: { js: "#!/usr/bin/env node" },
  clean: true,
  // Don't bundle deps — they'll be installed via npm
  external: [
    "ink",
    "react",
    "@inkjs/ui",
    "zustand",
    "execa",
    "clipboardy",
  ],
});
