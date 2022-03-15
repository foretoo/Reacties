import { h } from "preact"
import { memo } from "preact/compat"
import "./button.css"

const Button = ({

  name = "button",
  type = "",
  size = 40,
  className = "",
  style, // {}
  attrs, // {}
  onClick, // () => {}

}) => (

  <button {...attrs}
    className={`button ${type ? type : ""} ${className ? className : ""}`.trim()}
    style={{ ...style, "--butSize": `${size}px` }}
    onClick={onClick} >
    {name.toUpperCase()}
  </button>

)

export default memo(Button)