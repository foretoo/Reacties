import React, { memo } from "react"
import Loader from "../loader"
import Image from "../image"
import "./details.css"

const Details = memo(({ type, details }) => {

  let output

  if (!details) output = <Loader/>
  else {
    const items = Object.entries(details).map((v,i) => {
      if (!i)       return null
      if (i === 1)  return <li className="title" key={`${details.id}_${i}`}><h2>{v[1]}</h2></li>
      return <li key={`${details.id}_${i}`}>{`${v[0]}: ${v[1]}`}</li>
    })
    output =
    <>
      <div className="img">
        <Image type={type} id={details.id} />
      </div>
      <ul>{items}</ul>
    </>
  }

  return <section className="details">{output}</section>
})

export default Details
