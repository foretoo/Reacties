const Nav = () => {
  return r("nav", null, [
    r("input", { className: "search", placeholder: "_search" }),
    r("ul", { className: "filter" }, [
      r("li", null, "All"),
      r("li", null, "Active"),
      r("li", null, "Done")
    ])
  ])
}
