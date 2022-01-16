import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { Context } from '@app'
import { Switcher } from '@components'
import './css/mode-switcher.css'

const ModeSwitcher = () => {

  const { state, dispatch } = useContext(Context)
  const { format: { label } } = state

  const hideSnackbar = () => dispatch({ type: 'COLOR_MODE_HIDE' })

  const handleChangeMode = format => {
    clearTimeout(hideSnackbar)
    dispatch({
      type: 'CHANGE_COLOR_MODE',
      payload: format
    })
    dispatch({ type: 'COLOR_MODE_SHOW' })
    setTimeout(hideSnackbar, 1600)
  }

  return (
    <Switcher
      option1="RGB"
      option2="HEX"
      defaultValue="RGB"
      onChange={handleChangeMode} />
  )
}

export default ModeSwitcher