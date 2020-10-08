import { h, createContext } from 'preact'
import { useReducer } from 'preact/hooks'

const Context = createContext()

const initState = {
  copy: false,
  color: '',
  mode: 'HEX'
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'COPY':
      return {
        copy: true,
        color: action.payload
      }
    case 'ANIMATION_DONE':
      return {
        ...state,
        copy: false
      }
    case 'CHANGE_COLOR_MODE':
      return {
        ...state,
        mode: action.payload
      }
    default:
      return state
  }
}

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <Context.Provider value={{
      state, dispatch
    }}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
