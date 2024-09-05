import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: vercel(),  // Use the Vercel adapter
  },
};

export default config;
