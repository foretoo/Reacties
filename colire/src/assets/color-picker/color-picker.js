import { h, createContext } from "preact"
import { useState, useEffect, useRef } from "preact/hooks"
import chroma from "chroma-js"
import "./color-picker.css"

const Context = createContext()

const ColorPicker = ({
  color = "#fff",
  onChange = (color) => console.log(color.hex),
  children = [],
  className = "",
  style = {},
}) => {

  const getHSL = (color) => {
    const hsl = chroma(color).hsl()
    if (isNaN(hsl[0])) hsl[0] = color.hasOwnProperty("h") ? color.h : 0
    return hsl
  }

  const initPicker = {
    tone: {
      size:  100,
      point: { x: 0, y: 0 },
    },
    hsl:     getHSL(color),
    start:   false,
    moving:  false,
  }
  const [ GET, SET ] = useState(initPicker)

  useEffect(() => {
    !GET.start && SET((PREV) => {
      const _color = chroma(color)
      const hsl = _color.hsl()
      if (isNaN(hsl[0])) hsl[0] = color.hasOwnProperty("h") ? color.h : 0
      const [ , x, y ] = _color.hsv()
      const point = { x: x * PREV.tone.size, y: PREV.tone.size - y * PREV.tone.size }
      return { ...PREV,
        tone: { ...PREV.tone, point },
        hsl,
      }
    })
  }, [ color, GET.tone.size ])



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


  const classList = `picker-container` + (className.length ? ` ${className}` : ``)

  return (
    <Context.Provider value={{ GET, SET, handleChange }}>
      <div className={classList} style={{ "--hue": GET.hsl[0], ...style }}>

        {children}

      </div>
    </Context.Provider>
  )
}

export { ColorPicker, Context }