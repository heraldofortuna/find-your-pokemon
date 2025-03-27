import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "microfrontend1",
      filename: "remoteEntry.js",
      exposes: {
        "./PokemonDetail": "./src/PokemonDetail",
      },
      shared: ["axios", "react", "react-dom", "react-router-dom", "zustand"]
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  }
})
