import { h } from "preact"
import { useContext, useState, useEffect, useRef } from "preact/hooks"
import { Context } from "./color-picker"
import { clamp } from "./utils"
import chroma from "chroma-js"

const ToneHandler = ({ size = 100 }) => {

  const { hsl, start, handleChange } = useContext(Context)
  const [ point, setPoint ] = useState({ x: 0, y: 0 })
  const tonerRef = useRef()

  useEffect(() => {
    !start && setPoint(() => {
      const [ , x, y ] = chroma(...hsl, "hsl").hsv()
      return { x: x * size, y: size - y * size }
    })
  }, [ size, hsl ])

  /*------------------*/
  /*----TONE START----*/
  /*------------------*/
  const handleToneStart = (e) => {
    tonerRef.current.setPointerCapture(e.pointerId)
    const currentPoint = {
      x: clamp(e.offsetX, 0, size),
      y: clamp(e.offsetY, 0, size),
    }

    if (currentPoint.x !== point.x || currentPoint.y !== point.y) {
      const hsv = [ hsl[0], currentPoint.x / size, (size - currentPoint.y) / size ]
      const newHSL = chroma(...hsv, "hsv").hsl()
      if (isNaN(hsl[0])) newHSL[0] = hsl[0]
      handleChange("START", newHSL)
      setPoint(currentPoint)
    }
    else handleChange("START")
  }
  /*----------------*/
  /*----TONE END----*/
  /*----------------*/
  const handleToneEnd = (e) => {
    tonerRef.current.releasePointerCapture(e.pointerId)
    handleChange("END")
  }
  /*-----------------*/
  /*----TONE MOVE----*/
  /*-----------------*/
  const handleToneMove = (e) => {
    if (start) {
      e.preventDefault()
      const currentPoint = {
        x: clamp(e.offsetX, 0, size),
        y: clamp(e.offsetY, 0, size),
      }

      const hsv = [ hsl[0], currentPoint.x / size, (size - currentPoint.y) / size ]
      const newHSL = chroma(...hsv, "hsv").hsl()
      if (isNaN(hsl[0])) newHSL[0] = hsl[0]
      handleChange("MOVE", newHSL)
      setPoint(currentPoint)
    }
  }

  return (
    <div ref={tonerRef} className="picker-tone"
      style={{ "--toneSize": `${size}px` }}
      onPointerDown={handleToneStart}
      onPointerMove={handleToneMove}
      onPointerUp={handleToneEnd}
      onPointerCancel={handleToneEnd} >
      <div className="picker-tone-point"
        style={{
          top:        `${point.y}px`,
          left:       `${point.x}px`,
          background: `hsl(${hsl[0]}, ${hsl[1] * 100}%, ${hsl[2] * 100}%)`,
        }} >
      </div>
    </div>
  )

}

export default ToneHandler