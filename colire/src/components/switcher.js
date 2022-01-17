import { h } from 'preact'
import { useState } from 'preact/hooks'
import './css/switcher.css'

const Switcher = ({
  option1 = "on",
  option2 = "off",
  defaultValue = "off",
  onChange = () => {},
  style = { "--font-size": "16px", "--padding": "10px" }
}) => {

  if (option1.trim() === "" || option2.trim() === "") {
    throw Error("options must not be an empty string")
  }
  if (defaultValue !== option1 && defaultValue !== option2) {
    throw Error("defaultValue must equals either option1 or option2")
  }

  const [ value, setValue ] = useState(defaultValue)

  const handleSelect = (option) => {
    if (option !== value) {
      onChange(option)
      setValue(option)
    }
  }

  return (
    <div className='switcher-container' style={style}>
      <div className='switcher'>
        <div
          className={`switch-case${value === option1 ? " active" : ""}`}
          onClick={() => handleSelect(option1)} >
          {option1.toUpperCase()}
        </div>
        <div
          className={`switch-case${value === option2 ? " active" : ""}`}
          onClick={() => handleSelect(option2)} >
          {option2.toUpperCase()}
        </div>
      </div>
    </div>
  )
}

export default Switcher