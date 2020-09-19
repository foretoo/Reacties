import React, { useState, useEffect, useMemo, useCallback } from "react"
import SwapiService from "../../services/SwapiService"
import isMobile from "../ismobile"


const Context = React.createContext()

const ContextProvider = ({ children }) => {

  const isMo = useMemo(() => isMobile())
  const swapi = useMemo(() => new SwapiService)
  
  const [ page, setPage ] = useState(null)
  const [ details, setDetails ] = useState({ id: null, detailsSelected: false })

  const changePage = useCallback((page) => {
    setPage(page)
    setDetails({ id: null, detailsSelected: false })
  })
  const changeDetails = useCallback((id) => setDetails({ id, detailsSelected: true }))

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
      ...details, page, isMo, changePage, changeDetails, getList, getDetails
    }}>
      {children}
    </Context.Provider>
  )
}
export { Context, ContextProvider }
