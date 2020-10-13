import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { Context } from '../app/context'
import './css/select.css'

const Select = () => {

  const { state, dispatch } = useContext(Context)

  const handleChangeMode = format => {
    dispatch({
      type: 'CHANGE_COLOR_MODE',
      payload: format
    })
    setTimeout(() => {
      dispatch({ type: 'MODE_ANIMATION_DONE' })
    }, 1600)
  }

  return (
    <ul class='color-mode-list'>
      <li
        class={state.format.label === 'HEX' ? 'active' : ''}
        onClick={() => handleChangeMode('HEX')}>
        HEX
      </li>
      <li
        class={state.format.label === 'RGB' ? 'active' : ''}
        onClick={() => handleChangeMode('RGB')}>
        RGB
      </li>
    </ul>
  )
}

export default Select
