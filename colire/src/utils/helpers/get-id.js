const getID = (str) => (
  str.toLowerCase().replace(/\s\s+/g, " ").trim().replace(/ /g, "-")
)
export default getID