import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // Allow unoptimized local images during development when placeholders are missing
    unoptimized: false,
    // Add any external image domains here if needed in future
    remotePatterns: [],
  },
}

export default nextConfig
