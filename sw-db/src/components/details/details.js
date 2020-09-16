import React, { useState, useEffect, useContext } from "react"
import { Context } from "../context"
import Loader from "../loader"
import Image from "../image"
import "./details.css"

const Details = () => {

  const [data, setData] = useState(null)
  const {isMo, page, id, getDetails} = useContext(Context)

  useEffect(() => {
    id ? getDetails(page, id).then(data => setData(data)) : setData(null)
  }, [page, id])

  let output
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
          <Image type={page} id={id} />
        </div>
        <ul>{items}</ul>
      </>
  }

  return <section className={isMo ? "details mobile" : "details"}>{output}</section>
}

export default Details
