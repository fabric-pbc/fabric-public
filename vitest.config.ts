
import { defineConfig, coverageConfigDefaults } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      ...coverageConfigDefaults,
      exclude: [
        ...coverageConfigDefaults.exclude,
        "rollup.lib.config.*",
      ]
    }
  }
})
