/** @type {import('next').NextConfig} */

const withCSS = require("@zeit/next-css");
// const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

// fix: prevents error when .css files are required by node
// if (typeof require !== "undefined") {
//   require.extensions[".css"] = (file) => {};
// }

const nextConfig = {
  reactStrictMode: false,
  swcMinify: false, 
  target: "server",
  // distDir: 'build',
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.(raw)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: "raw-loader",
    });

    return config;
  },
};

module.exports = withPlugins(
  [ 
    withCSS({
      target: "serverless",
      webpack(config) {
        config.module.rules.push({
          test: /\.(jpg|jpeg|png|svg|eot|otf|ttf|woff|woff2)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 8192, 
            },
          },
        });
        return config;
      },
    }),
  ],
  nextConfig
);

module.exports = nextConfig;
