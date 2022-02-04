import { h } from "preact"
import "./button.css"

const Button = ({
  name = "button",
  type = "",
  className = "",
  style = {},
  attrs = {},
  onClick = () => {},
}) => {
  
  const classList =
    `button` +
    (type && ` ${type}`) +
    (className && ` ${className}`)

  return (
    <button {...attrs}
      className={classList}
      style={style}
      onClick={onClick} >
      {name.toUpperCase()}
    </button>
  )
}

export default Button