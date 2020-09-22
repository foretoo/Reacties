import { h, createContext } from 'preact'

const Context = createContext()

const ContextProvider = ({ children }) => {

  const cnx = 'get puplished'

  return (
    <Context.Provider value={{
      cnx
    }}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
