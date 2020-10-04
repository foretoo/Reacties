import { h } from 'preact'
import './css/color-box.css'

const ColorBox = ({ name, color }) => {
  return (
    <div class='color-box' style={{ background: color }}>
      {name}
    </div>
  )
}

export default ColorBox
