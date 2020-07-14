
const List = ({ items, handleChange, addItem }) => {

  const itemList = items.map((el, i) => {
    return r("section", { className: "item", key: el.id }, [
        r("div", { className: "done-icon" }),
        r(ContentEditable, {
          className:  "item-text",
          innerRef:   el.ref,
          html:       el.html,
          onChange:   e => handleChange(e.target.value, el.id)
        }),
        r("div", { className: "delete-icon" })
      ]
    )
  })

  const toAdd = () => {
    const ref = React.createRef()
    return r("section", { className: "addItem" }, [
      r("div", {
        className:  "add-icon",
        onClick:    () => addItem(ref.current.innerHTML)
      }),
      r(ContentEditable, {
        className:  "addItem-text",
        dataText:   "Add",
        innerRef:   ref,
        html:       ""
      }),
    ])
  }

  return r("main", null, [...itemList, r(toAdd)]);
}
