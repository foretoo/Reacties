
const List = ({ items, handleChange }) => {

  const itemList = items.map((el, i) => {
    return r("section", { className: "item", key: el.id }, [
      r("div", { className: "done" }),
      r("div",
        {
          className: "item-text",
          contenteditable: "true",
          onBlur: evt => handleChange(evt.target.children, el.id)
        },
        el.text.map(text => {
          return r("div", null, text)
        })
      ),
      r("div", { className: "delete" })
    ])
  })

  return r("main", null, itemList);
}
