class List extends React.Component {
  constructor() {
    super()
    this.state = { id: null }
  }

  handleMouseOver = id => {
    if (this.state.id !== id) this.setState({ id: id })
  }
  handleMouseLeave = id => {
    this.setState({ id: null })
  }

  render() {
    const {items, handleChange} = this.props
    const itemList = items.map(item => {
      return (
        r("section", {
          className: "item",
          key: item.id,
          onMouseOver: () => this.handleMouseOver(item.id),
          onMouseLeave: () => this.handleMouseLeave(item.id)
        }, [
          r(SVGicon, {
            className: "done-icon",
            path: "M19 4L7 16L1 10",
            hover: this.state.id === item.id ? true : false
          }),
          r(Item, {
            id: item.id,
            html: item.html,
            ref: item.ref,
            handleChange: handleChange
          }),
          r(SVGicon, {
            className: "delete-icon",
            path: "M16 4L4 16M4 4L16 16",
            hover: this.state.id === item.id ? true : false
          })
        ])
      )
    })
    return r("main", null, itemList);
  }
}

//////// ITEM ////////

class Item extends React.Component {

  shouldComponentUpdate(nextProps) {
    return this.props.html !== nextProps.html
  }

  render() {
    const { id, html, ref, handleChange } = this.props
    return (
      r(ContentEditable, {
        className: "item-text",
        innerRef: ref,
        html: html,
        onBlur: e => handleChange(e.target.innerHTML, id)
      })
    )
  }
}

//////// SVGicon ////////

const SVGicon = ({ className, path, hover }) => {
  return (
    r("div", {
      className: hover ? className : `${className} hidden`
      },
      r("svg", {
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
    )
  )
}
