import { h } from 'preact'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './css/color-box.css'

const ColorBox = ({ name, color }) => {
  return (
    <CopyToClipboard text={color}>
      <div class='color-box' style={{ background: color }}>
        <button class='color-box-button'>COPY</button>
        <div class='color-box-info'>
          <div class='color-box-info-name'>{color}</div>
          <button class='color-box-info-more'>MORE</button>
        </div>
      </div>
    </CopyToClipboard>
  )
}

export default ColorBox
