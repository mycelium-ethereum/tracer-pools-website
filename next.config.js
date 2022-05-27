module.exports = {
  trailingSlash: true,
  // Fix for framer-motion having a context error due to Next.JS > v12.0.1
  experimental: { esmExternals: false },
  future: { webpack5: true },
  env: {
    siteTitle: "Tracer Perpetual Pools",
    siteDescription: "",
    siteUrl: "https://tracer.finance",
    siteImagePreviewUrl: "img/preview.png",
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
        },
      },
    });
    return config;
  },
};
