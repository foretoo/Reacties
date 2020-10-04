import { h } from 'preact'

const ColorBox = ({ name, color }) => {
  return (
    <div class='color-box' style={{ background: color }}>
      {name}
    </div>
  )
}

export default ColorBox
