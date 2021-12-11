import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { Context } from '@app'
import './css/select-color-mode.css'

const SelectColorMode = () => {

  const { state, dispatch } = useContext(Context)
  const { format: { label } } = state

  const handleChangeMode = format => {
    dispatch({
      type: 'CHANGE_COLOR_MODE',
      payload: format
    })
    dispatch({ type: 'COLOR_MODE_SHOW' })
    setTimeout(() => {
      dispatch({ type: 'COLOR_MODE_HIDE' })
    }, 1600)
  }

  return (
    <ul class='color-mode-list'>
      <li
        class={label === 'HEX' ? 'active' : ''}
        onClick={() => handleChangeMode('HEX')}>
        HEX
      </li>
      <li
        class={label === 'RGB' ? 'active' : ''}
        onClick={() => handleChangeMode('RGB')}>
        RGB
      </li>
    </ul>
  )
}

export default SelectColorMode
