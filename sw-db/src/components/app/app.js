import React, { useState } from "react"
import SwapiService from "../../services/SwapiService"
import Header from "../header"
import Random from "../random"
import Page from "../page"
import "./app.css"

const App = () => {

  const [page, setPage] = useState("planets")

  const handlePageChange = (page) => setPage(page)

  return (
    <>
      <Header page={page} handlePageChange={handlePageChange} />
      <Random />
      <Page page={page} />
    </>
  )
}
export default App
