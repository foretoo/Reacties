import { h } from 'preact'
import { useState, useEffect, useRef } from 'preact/hooks'
import './css/switcher.css'

const Switcher = ({
  options = [ "on", "off" ],
  defaultValue = options[0],
  onChange = () => {},
  style = { "--font-size": "16px", "--padding": "10px", "--border": "2px" }
}) => {

  checkOptions(options, defaultValue)

  const INIT = {
    options: [
      {
        value: "",
        width: 0,
        translate: 0,
      }
    ],
    mounted: false,
    value: defaultValue,
  }

  const [ GET, SET ] = useState(INIT)
  const optionsRef = useRef([])

  useEffect(() => {
    optionsRef.current = optionsRef.current.slice(0, options.length)

    let translate = 0
    const optionsData = optionsRef.current.reduce((acc, div, i) => {
      const width = div.getBoundingClientRect().width
      translate += i ? acc[i - 1].width : 0
      return [ ...acc, { value: options[i], width, translate }]
    }, [])

    const mounted = optionsData.every(({ width }) => width > 0 )

    SET(PREV => ({ ...PREV, options: optionsData, mounted }))
  }, [ options ])

  const handleSelect = (option) => {
    if (option !== GET.value) {
      onChange(option)
      SET(PREV => ({ ...PREV, value: option }))
    }
  }

  const getAnimation = () => {
    const { width, translate } = GET.options.find(({ value }) => value === GET.value)
    return {
      width: `${width}px`,
      transform: `translate(${translate}px)`,
    }
  }

  return (
    <div className='switcher-container' style={style}>
      <div className='switcher'>
        {options.map((option, i) => (
          <div
            ref={div => optionsRef.current[i] = div}
            className={`switch-case${GET.value === option ? " active" : ""}`}
            onClick={() => handleSelect(option)} >
            {option}
          </div>
        ))}
        {GET.mounted && (
          <div className='switch-case switch-handler' style={getAnimation()}></div>
        )}
      </div>
    </div>
  )
}

const checkOptions = (options, defaultValue) => {
  if (options.length < 2) {
    throw Error("options number must be 2 at least")
  }
  if (
    options.some(option => typeof option !== "string") ||
    typeof defaultValue !== "string"
  ) {
    throw Error("options and defaultValue must be typeof string")
  }
  if (options.some(option => option.trim() === "")) {
    throw Error("options must not be an empty string")
  }
  if (options.length !== new Set(options).size) {
    throw Error("options must not equal each other for providing onChange functionality")
  }
  if (!options.includes(defaultValue)) {
    throw Error("defaultValue must equals one of the options")
  }
}

export default Switcher