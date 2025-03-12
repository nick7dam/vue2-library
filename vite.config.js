import { defineConfig } from 'vite';
import createVuePlugin from '@vitejs/plugin-vue2';

export default defineConfig({
  plugins: [createVuePlugin()],
  build: {
    lib: {
      entry: 'src/main.js',
      name: 'Vue2Library',
      fileName: (format) => `vue2-library.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
