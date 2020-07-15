class AddItem extends React.Component {

  constructor() {
    super()
    this.state = {
      ref: React.createRef(),
      isEnable: false
    }
  }

  render() {
    const ref = this.state.ref

    const addIcon = r("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      },
      r("path", {
        d: "M10 2V18M18 10L2 10",
        stroke: "#ccc",
        "stroke-width": "2"
      })
    )

    return r("section", { className: "addItem" }, [
      r("div", { className: "add-icon", onClick: () => this.props.toAddItem(ref.current.innerHTML) }, addIcon),
      r(ContentEditable, {
        className:  "addItem-text",
        dataText:   "Add",
        innerRef:   ref,
        html:       "",
        onKeyUp:    e => e.shiftKey && e.key === "Enter" && this.props.toAddItem(ref.current.innerHTML),
        onKeyDown:  e => e.shiftKey && e.key === "Enter" && e.preventDefault(),
        onBlur:     () => { if (this.props.isClean(ref.current.innerHTML)) ref.current.innerHTML = "" }
      }),
    ])
  }
}
