/** Prefixes a public-folder path with the app's base URL, so images resolve
 *  correctly whether the site is served from the domain root or a subdirectory
 *  (e.g. a GitHub Pages project page). */
export function withBase(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
