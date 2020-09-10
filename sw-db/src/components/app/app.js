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

  const [ page, setPage ] = useState("people")
  const isMo = useMemo(() => isMobile())
  const scene = useRef(null)

  const changePage = page => setPage(page)

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
