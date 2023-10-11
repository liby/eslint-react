import { nodeResolve } from "@rollup/plugin-node-resolve";
import { createRequire } from "module";
import { defineConfig } from "rollup";
import { dts } from "rollup-plugin-dts";
import { swc } from "rollup-plugin-swc3";
const require = createRequire(import.meta.url);
const packageJson = require("./package.json");
const external = Object.keys(packageJson.dependencies);

export default defineConfig([{
    external,
    input: "src/index.ts",
    output: [
        { file: "dist/index.cjs", format: "cjs" },
        { file: "dist/index.js", format: "cjs" },
        { file: "dist/index.mjs", format: "esm" },
    ],
    plugins: [
        nodeResolve(),
        swc({
            jsc: {
                minify: {
                    compress: true,
                    mangle: true,
                    module: true,
                },
            },
            minify: true,
        }),
    ],
}, {
    external,
    input: "src/index.ts",
    output: {
        file: "dist/index.d.ts",
    },
    plugins: [
        dts(),
    ],
}]);
