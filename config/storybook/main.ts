import type { StorybookViteConfig } from '@storybook/builder-vite';

const config: StorybookViteConfig = {
    stories: ['../../src/**/*.stories.tsx'],
    core: { builder: '@storybook/builder-vite' },
    async viteFinal(config) {
        return config;
    },
};

export default config;
