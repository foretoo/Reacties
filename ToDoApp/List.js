class Item extends React.Component {
  constructor() {
    super()
    this.state = { hover: false }
  }

  // shouldComponentUpdate(nextProps) {
  //   return this.props.html !== nextProps.html
  // }

  handleMouseOver = () => {
    this.setState({ hover: true })
  }
  handleMouseLeave = () => {
    this.setState({ hover: false })
  }

  render() {
    const { id, html, ref, handleChange } = this.props

    const svgIcon = path => {
      return
    }

    let hover = false

    return (
      r("section", {
        className: "item",
        key: id,
        onMouseOver: this.handleMouseOver,
        onMouseLeave: this.handleMouseLeave
      }, [
        r(SVGicon, {
          className: "done-icon",
          path: "M19 4L7 16L1 10",
          hover: null
        }),
        r(ContentEditable, {
          className: "item-text",
          innerRef: ref,
          html: html,
          onBlur: e => handleChange(e.target.innerHTML, id)
        }),
        r(SVGicon, {
          className: "delete-icon",
          path: "M16 4L4 16M4 4L16 16",
          hover: null
        })
      ])
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

//////// LIST ////////

class List extends React.Component {
  constructor() {
    super()
    this.state = { hover: false, id: null }
  }

  handleHover = id => {
    setState
  }

  render() {
    const {items, handleChange} = this.props
    const itemList = items.map(item => {
      return (
        r(Item, {
          id: item.id,
          html: item.html,
          ref: item.ref,
          handleChange: handleChange
        })
      )
    })
    return r("main", null, itemList);
  }
}
