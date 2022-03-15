import { h, createContext } from "preact"
import { useState, useEffect } from "preact/hooks"
import chroma from "chroma-js"
import "./color-picker.css"

const Context = createContext()

const ColorPicker = ({
  color = "#fff",
  onChange, // (color) => console.log(color.hex)
  children,
  className,
  style,
}) => {

  const getHSL = (color) => {
    const hsl = chroma(color).hsl()
    if (isNaN(hsl[0])) hsl[0] = color.hasOwnProperty("h") ? color.h : 0
    return hsl
  }
  const getTonePoint = (hsl, size) => {
    const [ , x, y ] = chroma(...hsl, "hsl").hsv()
    return { x: x * size, y: size - y * size }
  }

  const initPicker = {
    hsl:     getHSL(color),
    tone: {
      size:  0,
      point: null,
    },
    start:   false,
    moving:  false,
  }
  const [ GET, SET ] = useState(initPicker)

  useEffect(() => {
    !GET.start && GET.tone.size && SET((PREV) => {
      const hsl = getHSL(color)
      const point = getTonePoint(hsl, PREV.tone.size)
      return { ...PREV, hsl, tone: { ...PREV.tone, point }}
    })
  }, [ color ])

  useEffect(() => {
    GET.tone.size && SET((PREV) => {
      const point = getTonePoint(PREV.hsl, PREV.tone.size)
      return { ...PREV, tone: { ...PREV.tone, point }}
    })
  }, [ GET.tone.size ])



  const handleChange = (hsl) => {
    const color = chroma(hsl, "hsl")
    const [ h, s, l ] = hsl
    const [ r, g, b ] = color.rgb()
    const hex = color.hex()
    onChange({
      rgb: { r, g, b },
      hsl: { h, s, l },
      hex,
      moving: GET.moving,
    })
  }

  return (
    <Context.Provider value={{ GET, SET, handleChange }}>
      <div
        className={`picker-container ${className}`}
        style={{ "--hue": GET.hsl[0], ...style }}>

        {children}

      </div>
    </Context.Provider>
  )
}

export { ColorPicker, Context }