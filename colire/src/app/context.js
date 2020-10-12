import { h, createContext } from 'preact'
import { useReducer } from 'preact/hooks'

const Context = createContext()

const initState = {
  copied: false,
  colorCode: '',
  colorId: null,
  mode: 'HEX'
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'COPY':
      return {
        ...state,
        copied: true,
        colorCode: action.payload.colorCode,
        colorId: action.payload.id
      }
    case 'ANIMATION_DONE':
      return {
        ...state,
        copied: false
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
  const [ state, dispatch ] = useReducer(reducer, initState)
  return (
    <Context.Provider value={{
      state, dispatch
    }}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
