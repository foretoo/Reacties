class List extends React.Component {
  constructor() {
    super()
    this.state = { hoverId: null }
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  handleMouseOver (id) {
    if (this.state.hoverId !== id) this.setState({ hoverId: id })
  }
  handleMouseLeave (id) {
    this.setState({ hoverId: null })
  }

  render() {
    const { items, handleChange, deleteItem, markDone, markFocused } = this.props
    const itemList = items.map(item => {
      const isOver = this.state.hoverId === item.id
      return (
        r("section", {
          className: !item.display ? "item hidden" : isOver ? "item hover" : "item",
          key: item.id,
          onMouseOver: () => this.handleMouseOver(item.id),
          onMouseLeave: () => this.handleMouseLeave(item.id)
        }, [
          r("div", { className: "done-icon", onClick: () => markDone(item.id) },
            r(SVGicon, {
              path: "M19 4L7 16L1 10",
              dark: isOver,
              light: item.done
            })
          ),
          r("div", { className: "item-text-container" }, [
            r("div", {
              className: isOver ? "focus-flag" : "focus-flag hidden",
              onClick: () => markFocused(item.id)
            }, item.focused ? "unfocus" : "focus"),
            r(Item, {
              id: item.id,
              html: item.html,
              done: item.done,
              focused: item.focused,
              handleChange: handleChange
            })
          ]),
          r("div", { className: "delete-icon", onClick: () => deleteItem(item.id) },
            r(SVGicon, {
              path: "M16 4L4 16M4 4L16 16",
              dark: isOver
            })
          )
        ])
      )
    })
    return r("main", null, itemList);
  }
}
