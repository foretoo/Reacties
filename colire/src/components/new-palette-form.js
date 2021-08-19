import { h, Fragment } from 'preact'
import { useState, useContext } from 'preact/hooks'
import { Context } from '../app/context'
import chroma from 'chroma-js'
import { ChromePicker } from 'react-color'

const NewPaletteForm = () => {

  const [ valid, setValid ] = useState({ name: true, color: true })
  const { state, dispatch } = useContext(Context)
  const { color, palette, hidden } = state.custom

  let formClass = 'new-palette-form'
  if (hidden) formClass += ' hidden'

  let lumClass = 'new-palette-button'
  if (chroma(color.hex).luminance() < 0.333) lumClass += ' light'

  let inputClass = 'new-palette-input-name'
  let submitClass = 'submit'
  let warnText = ''
  if (!valid.name) {
    inputClass += ' warn'
    submitClass += ' warn'
    warnText += 'Name should be unique. '
  }
  if (!valid.color) {
    if (!submitClass.includes('warn')) submitClass += ' warn'
    warnText += 'Color should be unique.'
  }

  const handleAddColor = () => {
    const validColor = !palette.some(c => c.hex === color.hex)
    setValid(valid => ({ ...valid, color: validColor }))
    if (valid.name && valid.color && validColor) {
      dispatch({
        type: 'ADD_NEW_COLOR'
      })
      dispatch({
        type: 'CHANGE_NEW_COLOR_NAME',
        payload: ''
      })
    }
  }
  const handleChangeColor = ({ hex, rgb }) => {
    setValid(valid => ({ ...valid, color: !palette.some(c => c.hex === hex) }))
    const tempRGB = `rgb(${rgb.r},${rgb.g},${rgb.b})`
    dispatch({
      type: 'CHANGE_NEW_COLOR',
      payload: {
        hex,
        rgb: tempRGB
      }
    })
  }
  const handleChangeColorName = e => {
    const name = e.target.value
    setValid(valid => ({ ...valid, name: !palette.some(c => c.name === name) }))
    dispatch({
      type: 'CHANGE_NEW_COLOR_NAME',
      payload: name
    })
  }
  const handleRandomColor = () => {
    const randomColor = chroma.random()
    const hex = chroma(randomColor).hex()
    const rgb = chroma(randomColor).css()
    setValid(valid => ({ ...valid, color: !palette.some(c => c.hex === hex) }))
    handleChangeColor({ hex, rgb })
  }

  return (
    <aside class={formClass}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <button>Clear palette</button>
        <button onClick={handleRandomColor}>Random color</button>
      </div>
      <ChromePicker color={ color.hex ? color : {hex:'#fff'} } onChange={handleChangeColor} disableAlpha={true}/>
      <input class={inputClass} type='text' value={color.name} placeholder='color name' onChange={handleChangeColorName} />
      <div class={submitClass}>
        <button class={lumClass} style={{ backgroundColor: color.hex }} onClick={handleAddColor}>Add color</button>
        <p class='warn-info'>{warnText}</p>
      </div>
    </aside>
  )
}

export default NewPaletteForm
