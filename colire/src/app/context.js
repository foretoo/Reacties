import { h, createContext } from 'preact'
import seedColors from './seedColors'

const Context = createContext()

const ContextProvider = ({ children }) => {
  return (
    <Context.Provider value={{
      seedColors
    }}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
