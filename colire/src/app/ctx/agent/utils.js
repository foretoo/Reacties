const getScheme = () => localStorage.getItem("color-scheme")
const saveScheme = (scheme) => localStorage.setItem("color-scheme", scheme)
const clearScheme = () => localStorage.removeItem("color-scheme")
const matchDarkTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches

export {
  getScheme,
  saveScheme,
  clearScheme,
  matchDarkTheme,
}