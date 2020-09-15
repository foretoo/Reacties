import React, { useContext } from "react"
import { Context } from "../context"
import ErrorBoundry from "../error-boundry"
import List from "../list"
import Details from "../details"
import "./page.css"

const Page = () => {

  const {swapi} = useContext(Context)

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

  return (
    <main className="page">
      <ErrorBoundry>
        <List
          getData={getList}
        />
      </ErrorBoundry>
      <ErrorBoundry>
        <Details
          getData={getDetails}
        />
      </ErrorBoundry>
    </main>
  )
}
export default Page
