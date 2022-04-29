const urlPrefix = process.env.URL_PREFIX ? "/" + process.env.URL_PREFIX : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  publicRuntimeConfig: { urlPrefix },
  trailingSlash: true,
};

module.exports = nextConfig;
