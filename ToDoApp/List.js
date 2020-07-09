
function List(props) {

  const items = props.items.map((e, i) => {
    return r("section", { className: "item", key: i }, [
      r("div", { className: "done" }),
      r("div", { className: "item-text", contenteditable: "true" }, r("div", null, e)),
      r("div", { className: "delete" })
    ])
  })

  return r("main", null, items);
}
