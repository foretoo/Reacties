import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { Context } from '@app'
import { useDynamicImport } from '@utils/hooks'
import 'rc-slider/assets/index.css'
import './css/rc-slider.css'

const Slider = ({ id, level }) => {

  const { dispatch } = useContext(Context)

  const Component = useDynamicImport('Slider', () => import(
      /* webpackChunkName: "rc-slider" */
      /* webpackMode: "lazy" */
      /* webpackPrefetch: true */
      'rc-slider'
    )
  )

  const handleChangeLevel = level => {
    dispatch({
      type: 'CHANGE_PALETTE_LEVEL',
      payload: { id, level }
    })
  }

  return (
    <Component
      defaultValue={level}
      min={100}
      max={900}
      step={100}
      onChange={handleChangeLevel}
    />
  )
}

export default Slider
