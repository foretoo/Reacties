import { h } from 'preact'
import { Link } from 'react-router-dom'
import './css/palette-box.css'

const PaletteBox = ({ id, paletteName, colors }) => {
  const colorList = colors.map(({color}) => {
    const style = { background: color }
    return <div class='palette-box-color' style={style}></div>
  })
  return (
    <Link to={id} className='palette-box'>
      <div class='palette-box-name'>{paletteName}</div>
      {colorList}
    </Link>
  )
}

export default PaletteBox
