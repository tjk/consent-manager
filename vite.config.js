import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [
    cssInjectedByJsPlugin(),
  ],
  build: {
    lib: {
      entry: 'index.js',
      name: 'consent-manager',
      formats: ['es'],
      // fileName: (format) => `consent-manager.${format}.js`, // Custom file name
    },
    rollupOptions: {
      output: {
        manualChunks: undefined, // disable
        inlineDynamicImports: true,
      },
    },
  },
});
