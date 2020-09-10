import React, { useState, useEffect } from "react"
import SwapiService from "../../services/SwapiService"
import ErrorBoundry from "../error-boundry"
import List from "../list"
import Details from "../details"
import "./page.css"

const Page = ({ page, isMobile }) => {

  const [detailsID, setId] = useState(null)

  const swapi = new SwapiService
  const getList = (type) => {
    if (type === "planets")   return swapi.getAllPlanets()
    if (type === "people")    return swapi.getAllPeople()
    if (type === "starships") return swapi.getAllStarships()
  }
  const getDetails = (type, id) => {
    if (type === "planets")   return swapi.getPlanet(id)
    if (type === "people")    return swapi.getPerson(id)
    if (type === "starships") return swapi.getStarship(id)
  }
  const changeDetailsID = (id) => setId(id)

  useEffect(() => setId(null), [page])

  return (
    <main className="page">
      <ErrorBoundry>
        <List
          type={page}
          getData={getList}
          changeDetailsID={changeDetailsID}
          isMobile={isMobile}
        />
      </ErrorBoundry>
      <ErrorBoundry>
        <Details
          type={page}
          id={detailsID}
          getData={getDetails}
          isMobile={isMobile}
        />
      </ErrorBoundry>
    </main>
  )
}
export default Page
