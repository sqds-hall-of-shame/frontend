export const isURL = (url: string) => {
  try {
    new URL(url);
  } catch {
    return false;
  }

  return true;
};

export default isURL;
