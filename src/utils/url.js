export const parseQueryParams = (url) =>
  url
    .split("?")
    .slice(1)
    .join("?")
    .split("&")
    .map((e) => e.split("="))
    .reduce(
      (p, c) => ({
        ...p,
        [decodeURIComponent(c.shift())]: decodeURIComponent(c.join("=")),
      }),
      {}
    );
