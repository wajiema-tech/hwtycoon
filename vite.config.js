import { defineConfig } from 'vite';

export default defineConfig({
  // Godot's Web export preset writes game.html and its runtime assets here.
  root: 'build/web',
  base: './',
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      input: 'build/web/game.html',
    },
  },
});
