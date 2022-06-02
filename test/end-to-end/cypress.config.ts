import { defineConfig } from 'cypress';

export default defineConfig({
    fixturesFolder: false,
    video: false,
    e2e: {
        specPattern: 'test/end-to-end/**/*.test.*',
        baseUrl: 'https://ariperkkio.github.io/vite-everything/',
        supportFile: 'config/cypress/support.ts',
    },
});
