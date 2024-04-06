import { PluginOption, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import fs from 'fs';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    (visualizer({ gzipSize: true, open: true }) as PluginOption),
  ].filter(Boolean),
  server: {
    https: {
      key: fs.readFileSync('./.cert/key.pem'),
      cert: fs.readFileSync('./.cert/cert.pem'),
    }
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  css: {
    modules: {
      generateScopedName: '[name]__[local]__[hash:8]',
    },
  },
})