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

exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  const TRANSITION_DELAY = 0.3 * 4500 * 2
  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), TRANSITION_DELAY)
  }

  else {
    const savedPosition = getSavedScrollPosition(location) || [0, 0]
    window.setTimeout(() => window.scrollTo(...savedPosition), TRANSITION_DELAY)
  }

  return false
}