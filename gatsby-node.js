const Path = require("path");
exports.onCreateWebpackConfig = ({
  actions,
  plugins,
  stage,
  loaders,
}) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
        module: {
            rules: [
                {
                    test: /scrollmagic/,
                    use: loaders.null(),
                }
            ],
        },
        resolve: {
              alias: {
                path: require.resolve("path-browserify"),
                ScrollMagic: Path.resolve(
                  "node_modules",
                  "scrollmagic/scrollmagic/uncompressed/ScrollMagic.js"
                ),
                "animation.gsap": Path.resolve(
                  "node_modules",
                  "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js"
                ),
              },
            },
    })
}
  // actions.setWebpackConfig({
  //   module: {
  //     rules:
  //       stage === "build-html"
  //         ? [
  //             {
  //               test: /scrollmagic/,
  //               use: loaders.null(),
  //             },
  //           ]
  //         : [],
  //   },
  //   resolve: {
  //     alias: {
  //       path: require.resolve("path-browserify"),
  //       ScrollMagic: Path.resolve(
  //         "node_modules",
  //         "scrollmagic/scrollmagic/uncompressed/ScrollMagic.js"
  //       ),
  //       "animation.gsap": Path.resolve(
  //         "node_modules",
  //         "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js"
  //       ),
  //     },
  //   },
  // });

  if (stage === "build-javascript" || stage === "develop") {
    actions.setWebpackConfig({
      plugins: [plugins.provide({ process: "process/browser" })],
    });
  }
};
