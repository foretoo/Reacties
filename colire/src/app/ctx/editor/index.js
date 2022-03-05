import { h, createContext } from "preact"
import { useReducer, useContext } from "preact/hooks"
import init from "./init"
import reducer from "./reducer"

const State    = createContext()
const Dispatch = createContext()

const EditorContextProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, init)
  return (
    <State.Provider value={ state }>
      <Dispatch.Provider value={ dispatch }>
        {children}
      </Dispatch.Provider>
    </State.Provider>
  )
}

const useEditor = () => useContext(State)
const useEditorDispatch = () => useContext(Dispatch)

export { EditorContextProvider, useEditor, useEditorDispatch }