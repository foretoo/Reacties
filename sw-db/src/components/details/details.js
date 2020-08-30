import React, { memo, useState, useEffect } from "react"
import Loader from "../loader"
import Image from "../image"
import "./details.css"

const RawDetails = ({ type, id, getData, isMobile }) => {

  const [data, setData] = useState(null)
  let output

  useEffect(() => {
    id ? getData(type, id).then(data => setData(data)) : setData(null)
  }, [type, id])

  if (!data || !id) output = <Loader/>
  else {

    const items = Object.entries(data).map((v,i) => {
      const [key, value] = [v[0], v[1]]
      if (!i)       return null
      if (i === 1)  return <li className="title" key={i}><h1>{value}</h1></li>
      return <li key={i}>{key +": "+ value}</li>
    })

    output =
    <>
      <div className="img">
        <Image type={type} id={id} />
      </div>
      <ul>{items}</ul>
    </>
  }

  return <section className={isMobile ? "details mobile" : "details"}>{output}</section>
}



const shouldDetailsUpdate = (prevProps, nextProps) => {
  if (!prevProps.id || !nextProps.id) return !true
  if (prevProps.type === nextProps.type && prevProps.id !== nextProps.id) return !true
  return !false
}
const Details = memo(RawDetails, shouldDetailsUpdate)
export default Details
