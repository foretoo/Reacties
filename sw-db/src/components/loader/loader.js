import React, { useState, useEffect, useRef } from "react"
import "./loader.css"

const Loader = (props) => {

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
    <div className="loader" style={props.style ? props.style : null}>{str}</div>
  )
}

export default Loader
