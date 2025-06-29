import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'tests/e2e/**/*.spec.ts',
    supportFile: false,
    video: false,
    retries: {
      runMode: 2,
      openMode: 0,
    },
  },
});
