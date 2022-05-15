import { startDevServer } from '@cypress/vite-dev-server';

export default function (on, config: Cypress.Config) {
    on('dev-server:start', (options) => {
        return startDevServer({ options });
    });

    return config;
}
