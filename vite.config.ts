import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import obfuscatorPlugin from "vite-plugin-javascript-obfuscator";

const config = {
  plugins: [
    react(),
    checker({ typescript: true }),
    obfuscatorPlugin({
      options: {
        debugProtection: false,
        compact: true,
      },
    })
  ],
  server: {
    open: true,
  },
  build: {
    outDir: './build',
    minify: true,
  },
  publicDir: './public',
};

export default config;
