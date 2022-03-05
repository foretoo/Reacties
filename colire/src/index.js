import "./index.css"
import { h, render } from "preact"
import { HashRouter as Router } from "react-router-dom"
import { App } from "@app"
import {
  AgentContextProvider,
  EditorContextProvider,
  PalettesContextProvider,
} from "@app/ctx"

const root = document.createElement("div")
document.body.prepend(root)
root.id = "root"

render(
  <AgentContextProvider>
    <PalettesContextProvider>
      <EditorContextProvider>
        <Router>
          <App />
        </Router>
      </EditorContextProvider>
    </PalettesContextProvider>
  </AgentContextProvider>,
  root,
)