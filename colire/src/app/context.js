import { h, createContext } from 'preact'
import { useReducer } from 'preact/hooks'
import initialState from './initial-state'
import reducer from './reducers'

const Context = createContext()

const ContextProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={{
      state, dispatch
    }}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
