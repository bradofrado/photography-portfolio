import withPlaiceholder from "@plaiceholder/next";

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  output: 'standalone',

  images: {
    domains: ['images.ctfassets.net'],
    loader: 'custom',
    loaderFile: './lib/contentful-loader.tsx',
    path: 'https://',
  },
  experimental: {
		// Only run the plugin in development mode
		swcPlugins: process.env.NODE_ENV !== 'production' || true ? [
			['harmony-ai-plugin', {rootDir: new URL('.', import.meta.url).pathname}]
		] : []
	},
}

export default withPlaiceholder(nextConfig);

