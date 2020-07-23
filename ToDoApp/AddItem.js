const AddItem = ({ toAddItem, isClean }) => {
  const ref = React.createRef()
  return r("section", { className: "addItem" }, [
    r("div", { className: "add-icon", onClick: () => toAddItem(ref.current.innerHTML) },
      r(SVGicon, {path: "M10 2V18M18 10L2 10", light: true, dark: false})),
    r(ContentEditable, {
      className:  "addItem-text",
      dataText:   "Add",
      innerRef:   ref,
      html:       "",
      onKeyUp:    e => e.shiftKey && e.key === "Enter" && toAddItem(ref.current.innerHTML),
      onKeyDown:  e => e.shiftKey && e.key === "Enter" && e.preventDefault(),
      onBlur:     () => { if (isClean(ref.current.innerHTML)) ref.current.innerHTML = "" }
    }),
  ])
}
