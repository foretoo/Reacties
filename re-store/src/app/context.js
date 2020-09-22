import { h, createContext } from 'preact'
import BookstoreService from '../services/bookstore-service'

const Context = createContext()
const boosto = new BookstoreService()

const ContextProvider = ({ children }) => {
  return (
    <Context.Provider value={{
      boosto
    }}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
