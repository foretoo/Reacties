import { h } from "preact"
import { useContext, useEffect, useRef } from "preact/hooks"
import { Context } from "./color-picker"
import { clamp } from "./utils"
import chroma from "chroma-js"

const ToneHandler = ({
  size = 100,
  className = "",
  style,
}) => {

  const { GET, SET, handleChange } = useContext(Context)
  const tonerRef = useRef()

  useEffect(() => {
    SET((PREV) => ({ ...PREV, tone: { ...PREV.tone, size }}))
  }, [ size ])

  /*------------------*/
  /*----TONE START----*/
  /*------------------*/
  const handleToneStart = (e) => {
    tonerRef.current.setPointerCapture(e.pointerId)
    const point = {
      x: clamp(e.offsetX, 0, size),
      y: clamp(e.offsetY, 0, size),
    }
    if (
      point.x !== GET.tone.point.x ||
      point.y !== GET.tone.point.y
    ) {
      const hsv = [
        GET.hsl[0],
        point.x / size,
        (size - point.y) / size,
      ]
      const hsl = chroma(...hsv, "hsv").hsl()
      if (isNaN(hsl[0])) hsl[0] = GET.hsl[0]

      SET((PREV) => ({ ...PREV, hsl, tone: { ...PREV.tone, point }, start: true }))
      handleChange(hsl)
    }
    else SET((PREV) => ({ ...PREV, start: true }))
  }
  /*----------------*/
  /*----TONE END----*/
  /*----------------*/
  const handleToneEnd = (e) => {
    tonerRef.current.releasePointerCapture(e.pointerId)
    SET((PREV) => ({ ...PREV, start: false, moving: false }))
  }
  /*-----------------*/
  /*----TONE MOVE----*/
  /*-----------------*/
  const handleToneMove = (e) => {
    if (GET.start) {
      e.preventDefault()
      const point = {
        x: clamp(e.offsetX, 0, size),
        y: clamp(e.offsetY, 0, size),
      }
      const hsv = [
        GET.hsl[0],
        point.x / size,
        (size - point.y) / size,
      ]
      const hsl = chroma(...hsv, "hsv").hsl()
      if (isNaN(hsl[0])) hsl[0] = GET.hsl[0]
      
      SET((PREV) => ({ ...PREV, hsl, tone: { ...PREV.tone, point }, moving: true }))
      handleChange(hsl)
    }
  }

  const classList = `picker-tone` + (className.length ? ` ${className}` : ``)

  return (
    <div ref={tonerRef} className={classList}
      style={{
        "--toneSize": `${size}px`,
        "--toneDur":  GET.moving ? "none" : "0.3s",
        ...style
      }}
      onPointerDown={handleToneStart}
      onPointerMove={handleToneMove}
      onPointerUp={handleToneEnd}
      onPointerCancel={handleToneEnd} >
      { GET.tone.point && (
        <div className="picker-tone-point"
          style={{
            transform: `translate(` +
              `calc(-50% + ${GET.tone.point.x}px),` +
              `calc(-50% + ${GET.tone.point.y}px)`  +
            `)`,
            background: `hsl(${GET.hsl[0]}, ${GET.hsl[1] * 100}%, ${GET.hsl[2] * 100}%)`,
          }} >
        </div>
      )}
    </div>
  )

}

export default ToneHandler