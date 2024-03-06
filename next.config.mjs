/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'khlug.org',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'thon.khlug.org',
        pathname: '/images/**',
      },
    ]
  }
};

export default nextConfig;
