import { h, createContext } from "preact"
import { useState, useEffect } from "preact/hooks"
import chroma from "chroma-js"
import "./color-picker.css"

const Context = createContext()

const ColorPicker = ({
  color = "#fff",
  onChange = (color) => console.log(color.hex),
  children,
}) => {

  const [ start, setStart ] = useState(false)
  const [ hsl, setHsl ] = useState([ 0, 0, 1, 1 ])

  useEffect(() => {
    !start && setHsl(() => {
      const hsl = chroma(color).hsl()
      if (isNaN(hsl[0])) hsl[0] = color.hasOwnProperty("h") ? color.h : 0
      return hsl
    })
  }, [ color ])



  const handleChange = (mode, hsl) => {
    switch (mode) {
      case "START":
        if (hsl) {
          setStart(true)
          setHsl(hsl)
          output(hsl)
        }
        else setStart(true)
        break
      case "END":
        setStart(false)
        break
      case "MOVE":
        setHsl(hsl)
        output(hsl)
        break
    }
  }
  const output = (hsl) => {
    const color = chroma(hsl, "hsl")
    const [ h, s, l ] = hsl
    const [ r, g, b ] = color.rgb()
    const hex = color.hex()
    onChange({
      rgb: { r, g, b },
      hsl: { h, s, l },
      hex,
    })
  }



  return (
    <Context.Provider value={{ hsl, start, handleChange }}>
      <div className="color-picker-container" style={{ "--hue": hsl[0] }}>

        {children}

      </div>
    </Context.Provider>
  )
}

export { ColorPicker, Context }