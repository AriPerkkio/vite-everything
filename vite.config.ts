/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

console.log('Environment is', process.env.NODE_ENV);

const dev = process.env.NODE_ENV === 'development';
const prod = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],

    // Deployed at Github Pages
    base: prod ? '/vite-everything/' : '/',

    // Fixes HMR in Github Codespaces
    server: dev ? { hmr: { clientPort: 443 } } : {},

    test: {
        include: ['**/*.test.{ts,tsx}'],
        reporters: ['verbose'],
    },
});
