import { h } from 'preact'
import { useState, useEffect, useRef } from 'preact/hooks'
import './css/switcher.css'

const Switcher = ({
  option1 = "on",
  option2 = "off",
  defaultValue = "off",
  onChange = () => {},
  style = { "--font-size": "16px", "--padding": "10px" }
}) => {

  catchError(option1, option2, defaultValue)

  const INIT = {
    handler: {
      option1Width: 0,
      option2Width: 0,
      translate: 0,
      mount: false,
    },
    value: defaultValue,
  }

  const [ GET, SET ] = useState(INIT)
  const option1Ref = useRef()
  const option2Ref = useRef()

  useEffect(() => {
    const option1Rect = option1Ref.current.getBoundingClientRect()
    const option2Rect = option2Ref.current.getBoundingClientRect()

    const option1Width = option1Rect.width
    const option2Width = option2Rect.width
    const translate = option2Rect.x - option1Rect.x
    const mount = option1Width && option2Width && translate
    const handler = { option1Width, option2Width, translate, mount }

    SET(PREV => ({ ...PREV, handler }))
  }, [])

  const handleSelect = (option) => {
    if (option !== GET.value) {
      onChange(option)
      SET(PREV => ({ ...PREV, value: option }))
    }
  }

  const animation = {
    width: `${GET.value === option1 ? GET.handler.option1Width : GET.handler.option2Width}px`,
    transform: `translate(${GET.value === option2 ? GET.handler.translate : 0}px)`,
  }

  return (
    <div className='switcher-container' style={style}>
      <div className='switcher'>
        <div
          ref={option1Ref}
          className={`switch-case${GET.value === option1 ? " active" : ""}`}
          onClick={() => handleSelect(option1)} >
          {option1.toUpperCase()}
        </div>
        <div
          ref={option2Ref}
          className={`switch-case${GET.value === option2 ? " active" : ""}`}
          onClick={() => handleSelect(option2)} >
          {option2.toUpperCase()}
        </div>
        {GET.handler.mount && (
          <div className='switch-case switch-handler' style={animation}></div>
        )}
      </div>
    </div>
  )
}

const catchError = (option1, option2, defaultValue) => {
  if (
    typeof option1 !== "string" ||
    typeof option2 !== "string" ||
    typeof defaultValue !== "string"
  ) {
    throw Error("options and defaultValue must be typeof string")
  }
  if (option1.trim() === "" || option2.trim() === "") {
    throw Error("options must not be an empty string")
  }
  if (defaultValue !== option1 && defaultValue !== option2) {
    throw Error("defaultValue must equals either option1 or option2")
  }
}

export default Switcher