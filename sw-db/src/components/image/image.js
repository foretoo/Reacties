import React, { memo, useState, useEffect } from "react"
import Loader from "../loader"
import Error from "../error"
import "./image.css"

const Image = memo((props) => {

  const [imgSrc, setImgSrc] = useState("")
  useEffect(() => {
    getImg()
  }, [props.type, props.id])

  const imgPath = props.type === "people" ? "characters" : props.type
  const getImg = async () => {
    const url = `https://starwars-visualguide.com/assets/img/${imgPath}/${props.id}.jpg`
    const res = await fetch(url)
    if (!res.ok) return setImgSrc("404")
    setImgSrc(url)
  }

  const output = imgSrc === "" ? <Loader /> : imgSrc === "404" ? <Error image={true} /> : <img src={imgSrc} />

  return output
})
export default Image
