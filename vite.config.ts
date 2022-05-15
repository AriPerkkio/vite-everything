/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const dev = process.env.NODE_ENV === 'development';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],

    // Fixes HMR in Github Codespaces
    server: dev ? { hmr: { clientPort: 443 } } : {},

    test: {
        include: ['**/*.test.{ts,tsx}'],
        reporters: ['verbose'],
    },
});
