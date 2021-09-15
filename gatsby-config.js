module.exports = {
  siteMetadata: {
    title: `Tracer Perpetual Pools`,
    description: `Leveraged exposure. No margins. No liquidations. A new derivative primitive.`,
    siteUrl: `https://tracer.finance`,
  },
  plugins: [
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
        duration: 1000,
      }
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "https://mycelium-content.uc.r.appspot.com",
        collectionTypes: ["tracer-blogs"],
      },
    },
  ],
};
