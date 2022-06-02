import { defineConfig } from 'cypress';

export default defineConfig({
    fixturesFolder: false,
    video: false,
    e2e: {
        specPattern: 'test/integration/**/*.test.*',
        baseUrl: 'http://localhost:3000',
        supportFile: 'config/cypress/support.ts',
    },
});
