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

export const capitaliseFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const sortByDate = (a: any, b: any) => {
  return (
    new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime()
  );
};
