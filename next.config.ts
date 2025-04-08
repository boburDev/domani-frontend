// Import the NextConfig type if you're using TypeScript for the config
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    allowedDevOrigins: ['http://192.168.1.206'], // Add your local IP or development origin here
  },
  webpack(config) {
    // Add .json extension handling to webpack config
    config.resolve.extensions.push('.json');
    return config;
  },
};

export default nextConfig;
