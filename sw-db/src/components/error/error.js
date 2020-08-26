import React from "react"
import "./error.css"

const Error = (props) => {
  if (props.image) return <div className="error">No such image yet</div>
  return (
    <div className="error">
      Something has gone uncommonly wrong,<br/>
      but we`ve already sent droids to fix it!
    </div>
  )
}

export default Error
