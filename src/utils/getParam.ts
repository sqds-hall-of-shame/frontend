export const getParam = (name: string): string | null => {
  if (window.location.search === "") {
    return null;
  }

  for (const param of window.location.search.replace("?", "").split("&")) {
    if (param.startsWith(name)) {
      return decodeURIComponent(param.replace(name + "=", ""));
    }
  }

  return null;
};

export default getParam;
