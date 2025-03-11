/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static HTML export for Netlify
  images: {
    unoptimized: true, // Required for static export
  },
  // Disable features not supported in static exports if needed
  trailingSlash: true, // Recommended for static sites
  // Ensure compatibility with Next.js 14.1.0
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
