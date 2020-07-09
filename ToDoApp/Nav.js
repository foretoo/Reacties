function Nav() {
  return r("nav", null, [
    r("input", {placeholder: "search"}),
    r("ul", null, [
      r("li", null, "All"),
      r("li", null, "Active"),
      r("li", null, "Done")
    ])
  ])
}
