import "./index.css"
import { h, render } from "preact"
import { HashRouter as Router } from "react-router-dom"
import { ContextProvider, App } from "@app"
import { AgentContextProvider } from "@app/ctx"

const root = document.createElement("div")
document.body.prepend(root)
root.id = "root"

render(
  <ContextProvider>
    <AgentContextProvider>
      <Router>
        <App />
      </Router>
    </AgentContextProvider>
  </ContextProvider>,
  root,
)