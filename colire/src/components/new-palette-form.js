import { h, Fragment } from 'preact'
import { useContext } from 'preact/hooks'
import { Context } from '../app/context'
import chroma from 'chroma-js'
import { ChromePicker } from 'react-color'

const NewPaletteForm = () => {

  const { state, dispatch } = useContext(Context)
  const { color, hidden } = state.custom

  let formClass = 'new-palette-form'
  if (hidden) formClass += ' hidden'
  let lumClass = 'new-palette-add'
  if (chroma(color.hex).luminance() < 0.333) lumClass += ' light'

  const handleAddColor = () => {
    dispatch({
      type: 'ADD_NEW_COLOR'
    })
  }
  const handleChangeColor = ({ hex, rgb }) => {
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
    dispatch({
      type: 'CHANGE_NEW_COLOR_NAME',
      payload: e.target.value
    })
  }
  const handleRandomColor = () => {
    const randomColor = chroma.random()
    const hex = chroma(randomColor).hex()
    const rgb = chroma(randomColor).css()
    handleChangeColor({ hex, rgb })
  }

  return (
    <aside class={formClass}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <button>Clear palette</button>
        <button onClick={handleRandomColor}>Random color</button>
      </div>
      <ChromePicker color={color.hex ? color : {hex:'#fff'}} onChange={handleChangeColor} disableAlpha={true}/>
      <input type='text' placeholder='color name' onChange={handleChangeColorName} />
      <button class={lumClass} style={{ backgroundColor: color.hex }} onClick={handleAddColor}>Add color</button>
    </aside>
  )
}

export default NewPaletteForm
