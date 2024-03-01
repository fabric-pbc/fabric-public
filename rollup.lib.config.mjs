/**
 * @type {import('rollup').RollupOptions}
 */


export const makeOutputLibraryESM = (dir = 'dist') => ({
  // file: packageJson.module || packageJson.main,
  // https://stackoverflow.com/questions/55339256/tree-shaking-with-rollup
  dir,
  preserveModules: true,
  preserveModulesRoot: 'src',
  format: "esm",
  sourcemap: true,
})

export const makeConfig = (packageJson, plugins, output) => ({
  input: "src/index.ts",
  output,
  plugins,
  external: [...Object.keys(packageJson.peerDependencies || {})],
  // from here: https://github.com/TanStack/query/issues/5175#issuecomment-1482196558
  onwarn(warning, warn) {
    if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
      return
    }
    warn(warning)
  }
})
