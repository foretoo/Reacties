import React, { useState, useEffect, useRef, useMemo } from "react"
import SwapiService from "../../services/SwapiService"
import ThreeScene from '../../threejs/ThreeScene';
import ErrorBoundry from "../error-boundry"
import Header from "../header"
import Random from "../random"
import Page from "../page"
import isMobile from "../ismobile"
import "./app.css"

const App = () => {

<<<<<<< HEAD
  const [ page, setPage ] = useState("people")
  const isMo = useMemo(() => isMobile())
  const scene = useRef(null)

  const changePage = page => setPage(page)
=======
  const [page, setPage] = useState("people")
  const isMo = useMemo(() => isMobile())
  const scene = useRef(null)

  const changePage = (page) => setPage(page)
>>>>>>> c524b92722b352df9ea2a7b514b1248ce011ea40

  useEffect(() => ThreeScene(scene.current, isMo), [])

  return (
    <>
      <div className="three-scene" ref={scene} />
      <main className="app">

        <ErrorBoundry>
          <Random isMobile={isMo} />
        </ErrorBoundry>
        <Header page={page} changePage={changePage} />
        <Page page={page} isMobile={isMo} />
      </main>
    </>
  )
}
export default App
