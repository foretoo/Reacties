class Item extends React.Component {

  constructor() {
    super()
    this.ref = React.createRef()
  }

  shouldComponentUpdate(nextProps) {
    return this.props.html !== nextProps.html || this.props.done !== nextProps.done
  }

  render() {
    const { id, html, done, ref, handleChange } = this.props
    return (
      r(ContentEditable, {
        className: done ? "item-text done" : "item-text",
        innerRef: this.ref,
        html: html,
        tagName: "span",
        onBlur: () => handleChange(this.ref.current.innerHTML, id)
      })
    )
  }
}
