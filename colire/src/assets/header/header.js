import { h } from "preact"
import "./header.css"

const Header = ({ className = "", children = [] }) => (
  <header className={`header` + (className ? ` ${className}` : ``)}>
    {children}
  </header>
)

export default Header
