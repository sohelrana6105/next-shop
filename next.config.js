/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "i.ibb.co",
  //       pathname: "/**",
  //     },
  //   ],
  // },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
