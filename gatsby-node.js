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

  createRedirect({
    fromPath: `/tokens`,
    toPath: `https://raw.githubusercontent.com/dospore/tracer-balancer-token-list/master/tokens.json`,
    statusCode: 200,
  });
};
