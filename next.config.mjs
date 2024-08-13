/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
    // Next.js image optimization settings
    images: {
      domains: ['localhost'], // Add domains here if you're loading images from external sources
      deviceSizes: [640, 750, 828, 1080, 1200, 1920],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    },
  
    // Environment variables
    env: {
      // Add environment variables here
      CUSTOM_API_URL: process.env.CUSTOM_API_URL,
    },
  
    // Webpack configuration
    webpack: (config, { dev, isServer }) => {
      // Modify the webpack configuration here if needed
      if (!dev && !isServer) {
        // Example: Use a specific configuration for client-side production builds
        config.optimization.splitChunks.maxSize = 200000;
      }
      return config;
    },
  
    // Optional: Redirects and Rewrites
    async redirects() {
      return [
        {
          source: '/old-route',
          destination: '/new-route',
          permanent: true,
        },
      ];
    },
  
    // Optional: Custom headers
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'X-Custom-Header',
              value: 'my-custom-header-value',
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  