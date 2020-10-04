import { h } from 'preact'
import './css/color-box.css'

const ColorBox = ({ name, color }) => {
  return (
    <div class='color-box' style={{ background: color }}>
      <button class='color-box-button'>Copy</button>
      <div class='color-box-info'>
        <div class='color-box-info-name'>{name}</div>
      </div>
    </div>
  )
}

export default ColorBox
