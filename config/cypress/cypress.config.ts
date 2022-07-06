import { defineConfig } from 'cypress';

export default defineConfig({
    fixturesFolder: false,
    video: false,
    component: {
        specPattern: 'src/components/**/*.spec.tsx',
        supportFile: 'config/cypress/support.component.ts',
        indexHtmlFile: 'config/cypress/component-index.html',
        devServer: {
            framework: 'react',
            bundler: 'vite',
        },

        setupNodeEvents(on) {
            on('after:run', () => {
                console.log('[after:run] cwd is', process.cwd());
                // > [after:run] cwd is /workspaces/vite-everything/config/cypress
            });
        },
    },
});
