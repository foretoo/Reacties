import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { Context } from '../app/context'
import './css/select.css'

const Select = () => {

  const { state, dispatch } = useContext(Context)

  const handleChangeMode = mode => {
    dispatch({
      type: 'CHANGE_COLOR_MODE',
      payload: mode
    })
  }

  return (
    <ul class='color-mode-list'>
      <li
        class={state.mode === 'HEX' ? 'active' : ''}
        onClick={() => handleChangeMode('HEX')}>
        HEX
      </li>
      <li
        class={state.mode === 'RGB' ? 'active' : ''}
        onClick={() => handleChangeMode('RGB')}>
        RGB
      </li>
    </ul>
  )
}

export default Select
