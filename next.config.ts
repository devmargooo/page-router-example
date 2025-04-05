import type { NextConfig } from 'next';

const isGithubPages = process.env.NODE_ENV === 'production';

const repo = 'page-router-example'; // имя репозитория

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',
  reactStrictMode: true,
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
};

export default nextConfig;
