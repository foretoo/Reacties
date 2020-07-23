class AddItem extends React.Component {
  constructor() {
    super()
    this.state = { html: "", isClean: true, focused: false }
  }

  handleChange = html => {
    const isClean = this.props.isClean(html)
    this.setState({ html: html, isClean: isClean })
  }

  handleClick = () => {
    if (!this.state.isClean) {
      this.props.addItem(this.state.html)
      this.setState({ html: "" })
    }
  }

  render() {
    return r("section", { className: "addItem" }, [
      r("div", {
        className:  "add-icon",
        onClick:    this.handleClick
      },
        r(SVGicon, {
          path:   "M10 2V18M18 10L2 10",
          light:  this.state.isClean,
          dark:   !this.state.isClean
        })
      ),
      r("div", {
        className:  "addItem-text-container",
        onClick:    () => this.setState({ focused: true })
      }, [
        r("div", { className: !this.state.isClean ? "addItem-hint" : "addItem-hint hidden" }, "Shift+Enter to add"),
        r(AddItemText, {
          html:         this.state.html,
          handleChange: this.handleChange,
          addItem:      this.props.addItem,
          isClean:      this.props.isClean,
          focused:      this.state.focused
        })
      ]),
    ])
  }
}

class AddItemText extends React.Component {

  constructor() {
    super()
    this.ref = React.createRef()
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.html === "" || nextProps.focused
  }
  componentDidMount() {
    this.ref.current.focus()
  }
  componentDidUpdate() {
    this.ref.current.focus()
  }

  handleShiftEnter = html => {
    this.props.addItem(html)
    this.props.handleChange("")
  }

  render() {
    const { html, handleChange, isClean } = this.props
    return (
      r(ContentEditable, {
        className:  "addItem-text",
        dataText:   "Add",
        innerRef:   this.ref,
        html:       html,
        tagName:    "span",
        onChange:   () => handleChange(this.ref.current.innerHTML),
        onKeyUp:    e => e.shiftKey && e.key === "Enter" && !isClean(this.ref.current.innerHTML) && this.handleShiftEnter(this.ref.current.innerHTML),
        onKeyDown:  e => e.shiftKey && e.key === "Enter" && e.preventDefault(),
        onBlur:     () => { if (isClean(this.ref.current.innerHTML)) this.ref.current.innerHTML = "" }
      })
    )
  }
}
