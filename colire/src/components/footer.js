import { h } from "preact"
import "./css/footer.css"

const Footer = ({ className = "", children = [] }) => (
  <footer className={"footer " + (className && className)}>
    {children}
    <a href="https://github.com/foretoo">github.com/foretoo</a>
  </footer>
)

export default Footer
