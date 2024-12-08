
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [preact()],
  server: {
    host: '0.0.0.0', 
    port: 3000,     
  },
  preview: {
    host: '0.0.0.0', 
    port: parseInt(process.env.PORT || '3000'), 
  },
});
