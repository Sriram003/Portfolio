import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Portfolio/',  // Make sure this matches your repo name
  build: {
    outDir: 'dist',  // Ensure the build output directory is 'dist'
  },
});
