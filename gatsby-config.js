module.exports = {
  siteMetadata: {
    title: `Tracer Perpetual Pools`,
    description: `Tracer Perpetual Pools`,
    siteUrl: `http://localhost:8000`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        icon: './static/img/general/favicon.png'
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      },
    },
  ],
};
