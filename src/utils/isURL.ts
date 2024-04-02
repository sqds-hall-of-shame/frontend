export const isURL = (url: string) => {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return false;
  }

  try {
    new URL(url);
  } catch {
    return false;
  }

  return true;
};

export default isURL;
