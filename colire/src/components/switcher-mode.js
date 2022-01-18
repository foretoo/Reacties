import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { Context } from '@app'
import { Switcher } from '@components'
import './css/switcher-mode.css'

const SwitcherMode = () => {

  const { dispatch } = useContext(Context)

  const handleChangeMode = format => {
    dispatch({
      type: 'CHANGE_COLOR_MODE',
      payload: format
    })
    dispatch({ type: 'COLOR_MODE_SHOW' })
    setTimeout(() => dispatch({ type: 'COLOR_MODE_HIDE' }), 1600)
  }

  return (
    <Switcher
      options={[ "RGB", "HEX" ]}
      onChange={handleChangeMode} />
  )
}

export default SwitcherMode