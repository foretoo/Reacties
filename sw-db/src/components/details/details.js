import React, { memo, useState, useEffect } from "react"
import Loader from "../loader"
import Image from "../image"
import "./details.css"

const shouldDetailsUpdate = (prevProps, nextProps) => {
  if (!prevProps.id || !nextProps.id) return !true
  if (prevProps.type === nextProps.type && prevProps.id !== nextProps.id) return !true
  return !false
}

const Details = memo(({ type, id, getData }) => {

  const [data, setData] = useState(null)
  let output

  useEffect(() => {
    id ? getData(type, id).then(data => setData(data)) : setData(null)
  }, [type, id])

  if (!data || !id) output = <Loader/>
  else {
    const items = Object.entries(data).map((v,i) => {
      if (!i)       return null
      if (i === 1)  return <li className="title" key={`${id}_${i}`}><h2>{v[1]}</h2></li>
      return <li key={`${id}_${i}`}>{`${v[0]}: ${v[1]}`}</li>
    })
    output =
    <>
      <div className="img">
        <Image type={type} id={id} />
      </div>
      <ul>{items}</ul>
    </>
  }

  return <section className="details">{output}</section>

}, shouldDetailsUpdate)

export default Details
