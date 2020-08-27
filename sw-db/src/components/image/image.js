import React, { useState, useEffect } from "react"
import Loader from "../loader"
import Error from "../error"
import "./image.css"

const Image = ({ type, id }) => {

  let isMounted = true
  const [imgSrc, setImgSrc] = useState(null)
  const url = `https://starwars-visualguide.com/assets/img/${type === "people" ? "characters" : type}/${id}.jpg`
  const getImg = async () => await fetch(url)

  useEffect(() => {
    getImg().then(res => {
      if (isMounted) res.ok ? setImgSrc(url) : setImgSrc("404")
    })
    return () => isMounted = false
  }, [type, id])

  return !imgSrc ? <Loader /> : imgSrc === "404" ? <Error image={true} /> : <img src={imgSrc} />
}
export default Image
