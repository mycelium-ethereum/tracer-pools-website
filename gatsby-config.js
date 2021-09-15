module.exports = {
  pathPrefix: "/tracer-pools-website",
  siteMetadata: {
    title: `Tracer Perpetual Pools`,
    description: `Tracer Perpetual Pools`,
    siteUrl: `http://localhost:8000`,
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
        duration: 800,
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
