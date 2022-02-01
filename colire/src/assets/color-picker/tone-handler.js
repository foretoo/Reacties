import { h } from "preact"
import { useContext, useState, useEffect, useRef } from "preact/hooks"
import { Context } from "./color-picker"
import { clamp } from "./utils"
import chroma from "chroma-js"

const ToneHandler = ({ size = 100 }) => {

  const { GET, handleChange } = useContext(Context)
  const [ point, setPoint ] = useState({ x: 0, y: 0 })
  const tonerRef = useRef()

  useEffect(() => {
    !GET.start && setPoint(() => {
      const [ , x, y ] = chroma(...GET.hsl, "hsl").hsv()
      return { x: x * size, y: size - y * size }
    })
  }, [ size, GET.hsl ])

  /*------------*/
  /* TONE START */
  /*------------*/
  const handleToneStart = (e) => {
    tonerRef.current.setPointerCapture(e.pointerId)
    const currentPoint = {
      x: clamp(e.offsetX, 0, size),
      y: clamp(e.offsetY, 0, size),
    }

    if (currentPoint.x !== point.x || currentPoint.y !== point.y) {
      const hsv = [ GET.hsl[0], currentPoint.x / size, (size - currentPoint.y) / size ]
      const hsl = chroma(...hsv, "hsv").hsl()
      if (isNaN(hsl[0])) hsl[0] = GET.hsl[0]
      handleChange("START", hsl)
      setPoint(currentPoint)
    }
    else handleChange("START")
  }
  /*----------*/
  /* TONE END */
  /*----------*/
  const handleToneEnd = (e) => {
    tonerRef.current.releasePointerCapture(e.pointerId)
    handleChange("END")
  }
  /*-----------*/
  /* TONE MOVE */
  /*-----------*/
  const handleToneMove = (e) => {
    if (GET.start) {
      e.preventDefault()
      const currentPoint = {
        x: clamp(e.offsetX, 0, size),
        y: clamp(e.offsetY, 0, size),
      }

      const hsv = [ GET.hsl[0], currentPoint.x / size, (size - currentPoint.y) / size ]
      const hsl = chroma(...hsv, "hsv").hsl()
      if (isNaN(hsl[0])) hsl[0] = GET.hsl[0]
      handleChange("MOVE", hsl)
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
          background: `hsl(${GET.hsl[0]}, ${GET.hsl[1] * 100}%, ${GET.hsl[2] * 100}%)`,
        }} >
      </div>
    </div>
  )

}

export default ToneHandler