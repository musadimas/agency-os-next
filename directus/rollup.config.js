import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";

export default [
  // API
  {
    input: [
      // endpoints
      // "src/endpoints/api/index.js",
      // "src/endpoints/stats/index.js",
      // "src/endpoints/services/index.js",
    ],
    external: ["directus", "argon2", "jsonwebtoken"],
    plugins: [nodeResolve({ preferBuiltins: true }), commonjs(), json(), terser()],
    output: {
      dir: "./dist",
      format: "esm",
      exports: "named",
      preserveModules: true,
      preserveModulesRoot: "src",
      entryFileNames: "[name].mjs",
    },
  },
];
