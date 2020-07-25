class Item extends React.Component {

  constructor() {
    super()
    this.ref = React.createRef()
  }

  shouldComponentUpdate(nextProps) {
    return (
      this.props.html !== nextProps.html ||
      this.props.done !== nextProps.done ||
      this.props.focused !== nextProps.focused
    )
  }

  render() {
    const { id, html, done, focused, handleChange } = this.props
    let className = "item-text"
    if (done) className += " done"
    if (focused) className += " focused"
    return (
      r(ContentEditable, {
        className: className,
        innerRef: this.ref,
        html: html,
        tagName: "span",
        onBlur: () => handleChange(this.ref.current.innerHTML, id)
      })
    )
  }
}
