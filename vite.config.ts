import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { AliasOptions, defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

const root = path.resolve(__dirname, 'src');
const atoms = path.resolve(__dirname, 'src/atoms');

export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  base: '/wedding-app.github.io/', // 👈 важно! имя репозитория
  resolve: {
    alias: {
      '@': root,
      '@atoms': atoms,
    } as AliasOptions,
  },
});
