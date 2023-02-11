export const env = () => {
  const localUrl = location.host;
  return localUrl.includes("localhost") ? "dev" : "prd";
};

export const envUrl = () =>
  env() === "dev" ? "http://localhost:3000" : "https://zingy-fudge-57d344.netlify.app";
