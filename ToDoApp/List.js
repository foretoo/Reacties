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
    const {items, handleChange, deleteItem, markDone} = this.props
    const itemList = items.map(item => {
      return (
        r("section", {
          className: this.state.id === item.id ? "item hover" : "item",
          key: item.id,
          onMouseOver: () => this.handleMouseOver(item.id),
          onMouseLeave: () => this.handleMouseLeave(item.id)
        }, [
          r("div", { className: "done-icon", onClick: () => markDone(item.id) },
            r(SVGicon, {
              path: "M19 4L7 16L1 10",
              dark: this.state.id === item.id ? true : false,
              light: item.done
            })
          ),
          r(Item, {
            id: item.id,
            html: item.html,
            done: item.done,
            ref: item.ref,
            handleChange: handleChange
          }),
          r("div", { className: "delete-icon", onClick: () => deleteItem(item.id) },
            r(SVGicon, {
              path: "M16 4L4 16M4 4L16 16",
              dark: this.state.id === item.id ? true : false
            })
          )
        ])
      )
    })
    return r("main", null, itemList);
  }
}
