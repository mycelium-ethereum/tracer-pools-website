module.exports = {
  siteMetadata: {
    title: `Tracer Perpetual Pools`,
    description: `Leveraged exposure. No margins. No liquidations. A new derivative primitive.`,
    siteUrl: `https://tracer.finance`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "2",
        matomoUrl: "https://tracerfinance.matomo.cloud",
        siteUrl: "https://tracer.finance",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        icon: "./static/img/general/favicon.svg",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
      options: {
        name: "images",
        path: `${__dirname}/static/img/`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss")],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
        duration: 1200,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL:
          process.env.API_URL || "https://mycelium-content.uc.r.appspot.com",
        collectionTypes: ["tracer-blogs"],
      },
    },
    {
      resolve: `gatsby-plugin-image`,
    },
    {
      resolve: `gatsby-plugin-netlify`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 100,
          // breakpoints: [750, 1080, 1366, 1920],
          // backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
  ],
};
