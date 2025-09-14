/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-tweet": require("path").resolve(__dirname, "./src/stubs/react-tweet-stub"),
    };
    return config;
  },
};

export default nextConfig;
