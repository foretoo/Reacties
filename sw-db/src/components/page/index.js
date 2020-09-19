import React, { useEffect, useContext } from "react"
import { useParams, useHistory } from "react-router-dom"
import { Context } from "../context"
import ErrorBoundry from "../error-boundry"
import List from "../list"
import Details from "../details"

const Page = () => {

  const { page, id } = useParams()
  const history = useHistory()
  const { changePage, changeDetails } = useContext(Context)

  useEffect(() => changePage(page), [page])
  useEffect(() => id && changeDetails(id), [id])

  return (
    <main className="page">
      <ErrorBoundry><List /></ErrorBoundry>
      <ErrorBoundry><Details/ ></ErrorBoundry>
    </main>
  )
}

export default Page
