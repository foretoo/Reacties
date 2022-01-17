import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { Context } from '@app'
import { Slider } from '@components'
import './css/slider-level.css'

const SliderLevel = ({ id, level }) => {

  const { dispatch } = useContext(Context)

  const handleChangeLevel = level => {
    dispatch({
      type: 'CHANGE_PALETTE_LEVEL',
      payload: { id, level }
    })
  }

  return (
    <Slider
      defaultValue={level}
      min={100}
      max={900}
      step={100}
      onChange={handleChangeLevel}
    />
  )
}

export default SliderLevel
