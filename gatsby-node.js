exports.onCreateWebpackConfig = ({ getConfig, actions, plugins, stage }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        path: require.resolve("path-browserify"),
      },
    },
  });
  if (stage === "build-javascript" || stage === "develop") {
    actions.setWebpackConfig({
      plugins: [plugins.provide({ process: "process/browser" })],
    });
  }
  const config = getConfig();
  if (stage === "develop" && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    };
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions;

  const NEW_SITE_URL = "https://mycelium.xyz";

  createRedirect({
    fromPath: `/`,
    toPath: NEW_SITE_URL,
    statusCode: 301,
  });
  createRedirect({
    fromPath: `/brand`,
    toPath: NEW_SITE_URL,
    statusCode: 301,
  });
  createRedirect({
    fromPath: `/careers`,
    toPath: NEW_SITE_URL,
    statusCode: 301,
  });
  createRedirect({
    fromPath: `/learn`,
    toPath: NEW_SITE_URL,
    statusCode: 301,
  });
  createRedirect({
    fromPath: `/privacy-policy`,
    toPath: `${NEW_SITE_URL}/privacy-policy`,
    statusCode: 301,
  });
  createRedirect({
    fromPath: `/radar`,
    toPath: NEW_SITE_URL,
    statusCode: 301,
  });
  createRedirect({
    fromPath: `/tokens`,
    toPath: `https://raw.githubusercontent.com/dospore/tracer-balancer-token-list/master/tokens.json`,
    statusCode: 200,
  });
};
