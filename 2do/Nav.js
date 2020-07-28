const Nav = ({ filter, handleFilter }) => {
  return r("nav", null, [
    r("input", { className: "search", placeholder: "_search" }),
    r("ul", { className: "filter" }, [
      r("li", {
        className: filter === "ALL" ? "filtered" : "",
        onClick: () => handleFilter("ALL")
      }, r("span", null, "All")),
      r("li", {
        className: filter === "ACTIVE" ? "filtered" : "",
        onClick: () => handleFilter("ACTIVE")
      }, r("span", null, "Active")),
      r("li", {
        className: filter === "DONE" ? "filtered" : "",
        onClick: () => handleFilter("DONE")
      }, r("span", null, "Done"))
    ])
  ])
}
