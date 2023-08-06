import { defineConfig, sharpImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
  ],
  output: "hybrid",
  adapter: vercel({
    imageService: true
  }),
  experimental: {
    assets: true
  },
  image: {
    service: sharpImageService(),
  },
});