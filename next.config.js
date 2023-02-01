/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // sassOptions: {
  //   includePaths: ["./style/components/_components.scss"],
  //   prependData: `@import "_components.scss";`,
  // },
};

module.exports = nextConfig;
