import { h, createContext } from "preact"
import { useState, useEffect, useRef } from "preact/hooks"
import chroma from "chroma-js"
import "./color-picker.css"

const Context = createContext()

const ColorPicker = ({

  color = "#fff",
  shift = 0,
  size = 320,
  onChange = (color) => console.log(color.hex),
  children,

}) => {

  const handleChange = (hsl) => {
    const color = chroma(hsl, "hsl")
    const [ h, s, l ] = color.hsl()
    const [ r, g, b ] = color.rgb()
    const hex = color.hex()
    onChange({
      rgb: { r, g, b },
      hsl: { h, s, l },
      hex,
    })
  }

  const initialPicker = {
    pickerRef:  useRef(),
    handlerRef: useRef(),
    tonerRef:   useRef(),
    hue:        { x: 0, y: 0 },
    tone:       { x: 0, y: 0 },
    start:      false,
    pointer:    0,
    hsl:        [ 0, 0, 1, 1 ],
    shift:      shift % 360,
    mounted:    false,
  }
  const [ GET, SET ] = useState(initialPicker)



  useEffect(() => {
    if (!GET.start) {
      SET((PREV) => {
        const _color = chroma(color)
        let hsl = _color.hsl()
        if (isNaN(hsl[0])) hsl[0] = color.hasOwnProperty("h") ? color.h : 0
        const [ , x, y ] = _color.hsv()

        const tone = { x: x * 100, y: 100 - y * 100 }
        const pickerRect = GET.pickerRef.current.getBoundingClientRect()
        const hue = {
          x: pickerRect.x + pickerRect.width / 2,
          y: pickerRect.y + pickerRect.height / 2,
        }

        return { ...PREV, hue, tone, hsl, mounted: true }
      })
    }
  }, [ color, shift, size, onChange, children ])



  return (
    <Context.Provider value={{ GET, SET, handleChange }}>
      <div className="color-picker-container"
        style={{ "--size": `${size}px`, "--hue": GET.hsl[0] }}>

        {children}

      </div>
    </Context.Provider>
  )
}

export { ColorPicker, Context }