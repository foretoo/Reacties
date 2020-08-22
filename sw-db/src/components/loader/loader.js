import React, { useState, useEffect, useRef } from "react"
import "./loader.css"

const Loader = () => {

  const [ str, setStr ] = useState("loading")
  const strRef = useRef(str)

  useEffect(() => {
    const spinning = setInterval(() => {
      strRef.current === "loading....." ? strRef.current = str : strRef.current = strRef.current.concat(".")
      setStr(strRef.current)
    }, 333)
    return () => clearInterval(spinning)
  }, [])

  return (
    <div className="loader">{str}</div>
  )
}

export default Loader
