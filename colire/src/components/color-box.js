import { h } from 'preact'
import './css/color-box.css'

const ColorBox = ({ name, color }) => {
  return (
    <div class='color-box' style={{ background: color }}>
      <button class='color-box-button'>COPY</button>
      <div class='color-box-info'>
        <div class='color-box-info-name'>{color}</div>
        <button class='color-box-info-more'>MORE</button>
      </div>
    </div>
  )
}

export default ColorBox
