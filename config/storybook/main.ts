import { mergeConfig, UserConfig } from 'vite';
import type { StorybookViteConfig } from '@storybook/builder-vite';

const config: StorybookViteConfig = {
    stories: ['../../src/**/*.stories.tsx'],
    core: { builder: '@storybook/builder-vite' },
    async viteFinal(config) {
        const viteConfig: UserConfig = {
            // Fixes HMR in Github Codespaces
            server: { hmr: { clientPort: 443 } },
        };

        return mergeConfig(config, viteConfig);
    },
};

export default config;
