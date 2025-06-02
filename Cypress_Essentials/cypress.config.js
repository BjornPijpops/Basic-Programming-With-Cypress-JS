import { defineConfig } from 'cypress';

export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl: 'http://saucedemo.com',
    setupNodeEvents(on, config) {
      // Setup events here
    },
  },
});