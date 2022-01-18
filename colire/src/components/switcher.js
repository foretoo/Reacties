import { h } from 'preact'
import { useState, useEffect, useRef } from 'preact/hooks'
import './css/switcher.css'

const Switcher = ({

  options = [ "ON", "OFF" ],
  defaultValue = options[0],
  onChange = value => {
    console.log(`switcher turned ${value}`)
  },
  style = {
    "--font-size": "16px",
    "--padding": "10px",
    "--border": "2px"
  },

}) => {
  checkOptions(options, defaultValue)



  const initialSwitcher = {
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
  const [ switcher, setSwitcher ] = useState(initialSwitcher)
  const optionsRef = useRef([])



  useEffect(() => {
    optionsRef.current = optionsRef.current.slice(0, options.length)

    const optionsData = optionsRef.current.reduce((arr, div, i) => {
      const { width } = div.getBoundingClientRect()
      const translate = i ? arr[i-1].translate + arr[i-1].width : 0
      return [ ...arr, { value: options[i], width, translate }]
    }, [])

    const mounted = optionsData.every(({ width }) => width > 0 )

    setSwitcher(prevSwitcher => ({
      ...prevSwitcher,
      options: optionsData,
      mounted,
    }))
  }, [ options, style ])



  const handleSelect = (option) => {
    if (option !== switcher.value) {
      onChange(option)
      setSwitcher(prevSwitcher => ({ ...prevSwitcher, value: option }))
    }
  }
  const getAnimation = () => {
    const option = switcher.options.find(({ value }) => value === switcher.value)
    const { width, translate } = option
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
            className={`switch-case${switcher.value === option ? " active" : ""}`}
            onClick={() => handleSelect(option)} >
            {option}
          </div>
        ))}
        {switcher.mounted && (
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