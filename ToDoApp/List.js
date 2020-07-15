class Item extends React.Component {
  constructor() {
    super()
    this.state = { hover: false }
  }

  render() {
    const { id, html, ref, handleChange } = this.props

    const svgIcon = path => {
      return r("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        },
        r("path", {
          d: path,
          stroke: "#ccc",
          "stroke-width": "2"
        })
      )
    }

    return r("section", { className: "item", key: id }, [
      r("div", { className: "done-icon" }, svgIcon("M19 4L7 16L1 10")),
      r(ContentEditable, {
        className: "item-text",
        innerRef: ref,
        html: html,
        onBlur: e => handleChange(e.target.innerHTML, id)
      }),
      r("div", { className: "delete-icon" }, svgIcon("M16 4L4 16M4 4L16 16"))
    ])
  }
}



//////// LIST ////////

const List = ({ items, handleChange }) => {
  const itemList = items.map(item => {
    return r(Item, {
      id: item.id,
      html: item.html,
      ref: item.ref,
      handleChange: handleChange
    })
  })
  return r("main", null, itemList);
}
