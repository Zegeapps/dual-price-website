// utils/imageLoader.js
export function imageLoader({ src }) {
  const basePath = "/dual-price-website";
  return `${basePath}${src.startsWith("/") ? "" : "/"}${src}`;
}
