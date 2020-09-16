import React, { useEffect, useRef, useContext } from "react"
import { ContextProvider } from "../context"
import ThreeScene from '../../threejs/ThreeScene';
import ErrorBoundry from "../error-boundry"
import Header from "../header"
import Random from "../random"
import List from "../list"
import Details from "../details"
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
        <main className="page">
          <ErrorBoundry>
            <List />
          </ErrorBoundry>
          <ErrorBoundry>
            <Details />
          </ErrorBoundry>
        </main>
      </main>
    </ContextProvider>
  )
}
export default App
