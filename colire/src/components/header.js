import { h } from "preact"
import "./css/header.css"

const Header = ({ className = "", children = [] }) => (
  <header className={"header " + className}>
    {children}
  </header>
)

export default Header
