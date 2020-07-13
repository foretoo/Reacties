
const List = ({ items, handleChange }) => {

  const itemList = items.map((el, i) => {
    return r("section", { className: "item", key: el.id },
      r(ContentEditable, {
        className: "item-text",
        innerRef: el.ref,
        html: el.html,
        onChange: e => handleChange(e.target, el.id)
      }),
    )
  })

  return r("main", null, itemList);
}
