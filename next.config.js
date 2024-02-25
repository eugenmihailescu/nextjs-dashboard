/** @type {import('next').NextConfig} */
const nextConfig = {
  // see https://github.com/kelektiv/node.bcrypt.js/issues/979#issuecomment-1949878830
     webpack: (config) => {
    config.externals = [...config.externals, "bcrypt"];
    return config;
  }
};

module.exports = nextConfig;
