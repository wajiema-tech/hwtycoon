import { defineConfig } from 'vite';

export default defineConfig({
  // Godot's Web preset exports game.html and its supporting files to build/web.
  // Keep the Vite app at the repository root so StackBlitz has an index.html.
  base: './',
  publicDir: 'build/web',
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
  },
});
