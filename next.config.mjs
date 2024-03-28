/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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
      {
        protocol: 'https',
        hostname: 'cdn.khlug.org',
        pathname: '**',
      },
    ]
  }
};

export default nextConfig;
