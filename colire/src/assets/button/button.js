import { h } from "preact"
import "./button.css"

const Button = ({ name, className, style, attrs, onClick }) => {
  const _className = `button` + (className ? ` ${className}` : ``)
  return (
    <button {...attrs}
      className={_className}
      style={style}
      onClick={onClick} >
      {name.toUpperCase()}
    </button>
  )
}

export default Button