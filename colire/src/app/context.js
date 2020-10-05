import { h, createContext } from 'preact'
import { useReducer } from 'preact/hooks'
import seedColors from './seedColors'

const Context = createContext()

const initState = {
  copy: false,
  color: ''
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
    default:
      return state
  }
}

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <Context.Provider value={{
      seedColors, state, dispatch
    }}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
