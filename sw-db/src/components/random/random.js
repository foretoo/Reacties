<<<<<<< HEAD
import React, { useState, useEffect, useCallback, useMemo, useContext } from "react"
import { Context } from "../context"
=======
import React, { useState, useEffect, memo } from "react"
>>>>>>> 47187c120325991c1007b351b09f7f491ba78396
import SwapiService from "../../services/SwapiService"
import Loader from "../loader"
import Image from "../image"
import "./random.css"

<<<<<<< HEAD
const Random = () => {

  const [planet, setPlanet] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const {swapi, isMo} = useContext(Context)

  const updateData = useCallback(() => {
    let id = Math.floor(Math.random()*19) + 2
    id === 20 && id++
    swapi.getPlanet(id)
      .then(planet => {
        setPlanet(planet)
        setLoaded(true)
      })
  }, [])
  useEffect(() => {
    setInterval(updateData, 7000)
    return clearInterval(updateData)
  }, [])

  const output = !loaded ? <Loader /> : <RandomView planet={planet} />

  return (
    <section className={isMo ? "random mobile" : "random"}>
      {output}
    </section>
  )
}

const RandomView = ({ planet }) => {
  const { id, name, population, diameter, rotationPeriod } = planet
  return (
    <>
      <div className="hint"><span>RANDOM PLANET</span></div>
      <div className="img">
        <Image type="planets" id={id} />
      </div>
=======
const Random = memo(() => {

  const [planet, setPlanet] = usestate(null)
  const [loading, setLoading] = usestate(true)

  const swapi = new SwapiService
  const updateData = () => {
    let id = Math.floor(Math.random()*19) + 2
    id === 20 && id++
    swapi.getPlanet(id).then(planet => {
      setPlanet(planet)
      setLoading(false)
    })
  }

  useEffect(() => {
    setInterval(updateData, 7000)
    return clearInterval(updateData)
  }, [])

  return (
    <section className={this.props.isMobile ? "random mobile" : "random"}>
      {loading ? <Loader /> : <RandomView planet={planet} />}
    </section>
  )
})

const RandomView = ({ id, name, population, diameter, rotationPeriod }) => {
  return (
    <>
      <div className="hint"><span>RANDOM PLANET</span></div>
      <div className="img"><Image type="planets" id={id} /></div>
>>>>>>> 47187c120325991c1007b351b09f7f491ba78396
      <div className="randomDetails">
        <h1>{name}</h1>
        <ul>
          <li>population: {population}</li>
          <li>diameter: {diameter}</li>
          <li>rotationPeriod: {rotationPeriod}</li>
        </ul>
      </div>
    </>
  )
}

export default Random
