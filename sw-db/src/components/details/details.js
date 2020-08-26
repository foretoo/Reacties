import React, { memo } from "react"
import Loader from "../loader"
import Image from "../image"
import "./details.css"

const Details = memo((props) => {

  if (!props.hasDetails) {
    return (
      <section className="details">
        <Loader style={{marginLeft: "20px"}}/>
      </section>
    )
  }

  const items = Object.entries(props.details).map((v,i) => {
    if (!i) return null
    if (i === 1) return <li className="title" key={`${props.details.id}_${i}`}><h2>{v[1]}</h2></li>
    return <li key={`${props.details.id}_${i}`}>{`${v[0]}: ${v[1]}`}</li>
  })

  return (
    <section className="details">
      <div className="img">
        <Image type={props.type} id={props.details.id} />
      </div>
      <ul>{items}</ul>
    </section>
  )
})
export default Details
