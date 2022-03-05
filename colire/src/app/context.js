import { h } from "preact"
import {
  AgentContextProvider,
  EditorContextProvider,
  PalettesContextProvider,
} from "./ctx"

const Context = ({ children }) => (
  <AgentContextProvider>
    <PalettesContextProvider>
      <EditorContextProvider>
        {children}
      </EditorContextProvider>
    </PalettesContextProvider>
  </AgentContextProvider>
)

export default Context
