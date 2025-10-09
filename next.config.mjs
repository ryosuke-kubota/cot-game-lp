/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: [
      'dashboard-assets.dappradar.com',
      'prod-cot-game.s3.ap-northeast-1.amazonaws.com',
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
