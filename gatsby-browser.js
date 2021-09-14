const React = require("react");
const { AnimatePresence } = require("framer-motion");

exports.wrapPageElement = ({ element }) => {
  return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>;
};

// exports.onRouteUpdate = () => {
//   window.locations = window.locations || [document.referrer];
//   if (
//     window.locations[window.locations.length - 1] !== window.location.pathname
//   ) {
//     window.locations.push(window.location.pathname);
//   }
//   window.previousPath = window.locations[window.locations.length - 2];
// };
const transitionDelay = 1200;

exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
  } else {
    const savedPosition = getSavedScrollPosition(location);
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitionDelay
    );
  }
  return false;
};
