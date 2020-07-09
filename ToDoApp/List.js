
function List(props) {

  const items = props.items.map((e, i) => {
    return r("section", { className: "item", key: i }, [
      r("div", { className: "done" }),
      r("div", { className: "item-text" }, e),
      r("div", { className: "delete" })
    ])
  })

  return r("main", null, items);
}
