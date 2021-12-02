import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { Context } from '@app'
import chroma from 'chroma-js'
import { ChromePicker } from 'react-color'

const NewPaletteForm = () => {

  const { state, dispatch } = useContext(Context)
  const { color, palette, hidden, valid } = state.custom

  let formClass = 'new-palette-form'
  if (hidden) formClass += ' hidden'

  let lumClass = 'new-palette-button'
  if (chroma(color.color).luminance() < 0.333) lumClass += ' light'

  let inputClass = 'new-palette-input-name'
  let submitClass = 'submit'
  if (!valid.name || valid.warnText) {
    inputClass += ' warn'
    submitClass += ' warn'
  }
  if (!valid.color) {
    if (!submitClass.includes('warn')) submitClass += ' warn'
  }

  const handleAddColor = () => {
    if (!valid.name || !valid.color) return

    const validColor = !palette.some(c => c.color === color.color)
    if (!validColor) {
      dispatch({
        type: 'CHANGE_NEW_COLOR_NAME',
        payload: color.name
      })
      dispatch({
        type: 'CHANGE_NEW_COLOR',
        payload: color.color
      })
      return
    }

    dispatch({
      type: 'ADD_NEW_COLOR'
    })
  }
  const handleChangeColor = ({ hex }) => {
    dispatch({
      type: 'CHANGE_NEW_COLOR',
      payload: hex
    })
  }
  const handleChangeColorName = e => {
    const name = e.target.value
    dispatch({
      type: 'CHANGE_NEW_COLOR_NAME',
      payload: name
    })
  }
  const handleRandomColor = () => {
    const randomColor = chroma.random()
    const hex = chroma(randomColor).hex()
    handleChangeColor({ hex })
  }
  const handleClearPalette = () => {
    dispatch({
      type: 'CLEAR_PALETTE'
    })
  }

  return (
    <aside class={formClass}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={handleClearPalette}>Clear palette</button>
        <button onClick={handleRandomColor}>Random color</button>
      </div>
      <ChromePicker color={ color.color } onChange={handleChangeColor} disableAlpha={true}/>
      <input class={inputClass} type='text' value={color.name} placeholder='color name' onChange={handleChangeColorName} />
      <div class={submitClass}>
        <button class={lumClass} style={{ backgroundColor: color.color }} onClick={handleAddColor}>Add color</button>
        <p class='warn-info'>{valid.warnText}</p>
      </div>
    </aside>
  )
}

export default NewPaletteForm
