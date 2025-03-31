/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  // Adjust this to match your GitHub repository name
  basePath: '/resume',
  // Disable image optimization since it requires server components
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
