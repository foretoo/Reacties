import React, { useEffect, useRef, useContext } from "react"
import ThreeScene from '../../threejs/ThreeScene';
import ErrorBoundry from "../error-boundry"
import Header from "../header"
import Random from "../random"
import Page from "../page"
import { ContextProvider } from "../context"
import "./app.css"

const App = () => {

  const scene = useRef(null)
  useEffect(() => ThreeScene(scene.current), [])

  return (
    <ContextProvider>
      <div className="three-scene" ref={scene} />

      <main className="app">
        <ErrorBoundry>
          <Random />
        </ErrorBoundry>
        <Header />
        <Page />
      </main>
    </ContextProvider>
  )
}
export default App
