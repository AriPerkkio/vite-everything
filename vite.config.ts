/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

let env = process.env.NODE_ENV;

if (!env) {
    env = process.env.CI ? 'ci-default' : 'development';
}

console.log('Environment is', env);
console.log('process.env.CI', process.env.CI);

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],

    // Deployed at Github Pages
    base: env === 'production' ? '/vite-everything/' : '/',

    // Fixes HMR in Github Codespaces
    server: env === 'development' ? { hmr: { clientPort: 443 } } : {},

    test: {
        include: ['src/**/*.test.{ts,tsx}'],
        reporters: ['verbose'],
    },
});
