import { startDevServer } from '@cypress/vite-dev-server';

export default function (on, config: Cypress.Config) {
    on('after:run', () => {
        console.log('[after:run] cwd is', process.cwd());
        // [after:run] cwd is /workspaces/vite-everything
    });

    on('dev-server:start', (options) => {
        return startDevServer({ options });
    });

    return config;
}
