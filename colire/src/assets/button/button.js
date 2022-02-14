import { h } from "preact"
import "./button.css"

const Button = ({
  name = "button",
  type = "",
  size = 40,
  className = "",
  style = {},
  attrs = {},
  onClick = () => {},
}) => {
  
  const classList =
    `button` +
    (type ? ` ${type}` : ``) +
    (className ? ` ${className}` : ``)

  return (
    <button {...attrs}
      className={classList}
      style={{ ...style, "--butSize": `${size}px` }}
      onClick={onClick} >
      {name.toUpperCase()}
    </button>
  )
}

export default Button