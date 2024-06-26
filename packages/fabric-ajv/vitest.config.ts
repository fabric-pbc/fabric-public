import { defineConfig, mergeConfig, coverageConfigDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig , defineConfig({
  test: {
    coverage: {
      ...coverageConfigDefaults,
    },
  },
}))
