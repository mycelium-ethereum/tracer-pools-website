export const disableScroll = () => {
  document.body.classList.add("overflow-hidden");
};

export const enableScroll = () => {
  document.body.classList.remove("overflow-hidden");
};

export const isCollapsed = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth < 1536;
  } else {
    return false;
  }
};

export const isMobile = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth < 640;
  } else {
    return false;
  }
};
