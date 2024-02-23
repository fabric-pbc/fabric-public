/**
 * @type {import('rollup').RollupOptions}
 */
import typescript from "@rollup/plugin-typescript";
import packageJson from "./package.json" assert { type: "json" };
import { makeConfig, makeOutputLibraryESM } from '../../rollup.lib.config.mjs'

const output = [
  makeOutputLibraryESM()
]

const plugins = [
  typescript({ tsconfig: "./tsconfig.json" }),
]

const config = [{
  ...makeConfig(packageJson, plugins, output),
}]

export default config
