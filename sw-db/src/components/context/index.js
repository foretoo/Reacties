import React, { useState, useMemo, useCallback } from "react"
import SwapiService from "../../services/SwapiService"
import isMobile from "../ismobile"

const Context = React.createContext()

const ContextProvider = ({ children }) => {

  const isMo = useMemo(() => isMobile())
  const swapi = useMemo(() => new SwapiService)

  const [ state, setState ] = useState({ page: "people", detailsSelected: false })
  const changePage = page => setState({ ...state, page, id: null, detailsSelected: false })
  const changeDetails = id => setState({ ...state, id, detailsSelected: true })

  const getList = useCallback((type) => {
    if (type === "planets")   return swapi.getAllPlanets()
    if (type === "people")    return swapi.getAllPeople()
    if (type === "starships") return swapi.getAllStarships()
  })
  const getDetails = useCallback((type, id) => {
    if (type === "planets")   return swapi.getPlanet(id)
    if (type === "people")    return swapi.getPerson(id)
    if (type === "starships") return swapi.getStarship(id)
  })

  return (
    <Context.Provider value={{
      ...state, isMo, changePage, changeDetails, getList, getDetails
    }}>
      {children}
    </Context.Provider>
  )
}
export { Context, ContextProvider }
