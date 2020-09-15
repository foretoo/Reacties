import React, { useState, useMemo } from "react"
import SwapiService from "../../services/SwapiService"
import isMobile from "../ismobile"

const Context = React.createContext()

const ContextProvider = ({ children }) => {

  const isMo = useMemo(() => isMobile())
  const swapi = useMemo(() => new SwapiService)

  const [ state, setState ] = useState({ page: "people" })
  const changePage = page => setState({ ...state, page, id: null })
  const changeDetails = id => setState({ ...state, id })

  return (
    <Context.Provider value={{
      ...state, swapi, isMo, changePage, changeDetails
    }}>
      {children}
    </Context.Provider>
  )
}
export { Context, ContextProvider }
