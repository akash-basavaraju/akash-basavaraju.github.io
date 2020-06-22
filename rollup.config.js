import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonToES6 from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";
import styles from "rollup-plugin-styles";

export default {
  input: "./src/index.tsx",
  output: {
    file: "build/bundle.min.js",
    format: "iife",
    name: "bundle",
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonToES6({ include: "node_modules/**" }),
    replace({ "process.env.NODE_ENV": JSON.stringify("production") }),
    styles(),
    typescript(),
    terser(),
  ],
};
