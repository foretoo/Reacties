import { h } from "preact"
import { useContext, useState, useEffect } from "preact/hooks"
import { Context } from "./color-picker"
import { clamp } from "./utils"
import chroma from "chroma-js"

const ToneHandler = ({
  size = 100,
  className = "",
  style = {},
}) => {

  const { GET, SET, handleChange } = useContext(Context)

  useEffect(() => {
    SET((PREV) => ({ ...PREV, tone: { ...PREV.tone, size }}))
  }, [ size ])

  /*------------------*/
  /*----TONE START----*/
  /*------------------*/
  const handleToneStart = (e) => {
    GET.tonerRef.current.setPointerCapture(e.pointerId)
    const point = {
      x: clamp(e.offsetX, 0, GET.tone.size),
      y: clamp(e.offsetY, 0, GET.tone.size),
    }
    if (
      point.x !== GET.tone.point.x ||
      point.y !== GET.tone.point.y
    ) {
      const hsv = [
        GET.hsl[0],
        point.x / GET.tone.size,
        (GET.tone.size - point.y) / GET.tone.size,
      ]
      const hsl = chroma(...hsv, "hsv").hsl()
      if (isNaN(hsl[0])) hsl[0] = GET.hsl[0]
      handleChange(hsl)
      SET((PREV) => ({ ...PREV, hsl, start: true, tone: { ...PREV.tone, point }}))
    }
    else SET((PREV) => ({ ...PREV, start: true }))
  }
  /*----------------*/
  /*----TONE END----*/
  /*----------------*/
  const handleToneEnd = (e) => {
    GET.tonerRef.current.releasePointerCapture(e.pointerId)
    SET((PREV) => ({ ...PREV, start: false, moving: false }))
  }
  /*-----------------*/
  /*----TONE MOVE----*/
  /*-----------------*/
  const handleToneMove = (e) => {
    if (GET.start) {
      e.preventDefault()
      const point = {
        x: clamp(e.offsetX, 0, GET.tone.size),
        y: clamp(e.offsetY, 0, GET.tone.size),
      }
      const hsv = [
        GET.hsl[0],
        point.x / GET.tone.size,
        (GET.tone.size - point.y) / GET.tone.size,
      ]
      const hsl = chroma(...hsv, "hsv").hsl()
      if (isNaN(hsl[0])) hsl[0] = GET.hsl[0]
      handleChange(hsl)
      SET((PREV) => ({ ...PREV, tone: { ...PREV.tone, point }, hsl, moving: true }))
    }
  }

  const classList = `picker-tone` + (className && ` ${className}`)

  return (
    <div ref={GET.tonerRef} className={classList}
      style={{ "--toneSize": `${GET.tone.size}px`, ...style }}
      onPointerDown={handleToneStart}
      onPointerMove={handleToneMove}
      onPointerUp={handleToneEnd}
      onPointerCancel={handleToneEnd} >
      <div className="picker-tone-point"
        style={{
          transform: `translate(` +
            `calc(-50% + ${GET.tone.point.x}px),` +
            `calc(-50% + ${GET.tone.point.y}px)`  +
          `)`,
          background: `hsl(${GET.hsl[0]}, ${GET.hsl[1] * 100}%, ${GET.hsl[2] * 100}%)`,
          transition: GET.moving ? "none" : "0.2s"
        }} >
      </div>
    </div>
  )

}

export default ToneHandler