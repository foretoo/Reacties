class Item extends React.Component {

  shouldComponentUpdate(nextProps) {
    return this.props.html !== nextProps.html || this.props.done !== nextProps.done
  }

  render() {
    const { id, html, done, ref, handleChange } = this.props
    return (
      r(ContentEditable, {
        className: done ? "item-text done" : "item-text",
        innerRef: ref,
        html: html,
        onBlur: e => handleChange(e.target.innerHTML, id)
      })
    )
  }
}
