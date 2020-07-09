
function List(props) {

  const items = props.items.map((e, i) => {
    return r(Item, { text: e, id: i})
  })

  return r("main", null, items);
}



function Item(props) {

  return r("section", { className: "item", key: props.id }, [
    r("div", { className: "done" }),
    r("div", { className: "item-text", contenteditable: "true" }, r("div", null, props.text)),
    r("div", { className: "delete" })
  ])
}
