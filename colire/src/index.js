import "./index.css"
import { h, render } from "preact"
import { HashRouter as Router } from "react-router-dom"
import { App, Context } from "@app"

const root = document.createElement("div")
document.body.prepend(root)
root.id = "root"

render(
  <Context>
    <Router>
      <App />
    </Router>
  </Context>,
  root,
)