import { h } from 'preact'
import { useContext, useRef } from 'preact/hooks'
import { Context } from '../app/context'
import './css/select.css'

const Select = () => {

  const { dispatch } = useContext(Context)
  const ref = useRef()

  const handleChange = mode => {
    dispatch({
      type: 'CHANGE_COLOR_MODE',
      payload: mode
    })
  }
  return (
    <select
      ref={ref}
      class='select-color-mode'
      onChange={() => handleChange(ref.current.value)}
    >
      <option value='HEX'>hex</option>
      <option value='RGB'>rgb</option>
    </select>
  )
}

export default Select
