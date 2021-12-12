import { h } from 'preact'
import { Link } from 'react-router-dom'
import './css/palette-box.css'

const PaletteBox = ({ id, paletteName, colors }) => {
  const colorList = []
  for (const color in colors) {
    const style = { background: colors[color][500].hex }
    colorList.push(<div class='palette-box-color' style={style}></div>)
  }
  return (
    <Link to={`/${id}/`} className='palette-box'>
      <div className='palette-box-name'>{paletteName}</div>
      <div className='palette-box-content'>
        {colorList}
      </div>
    </Link>
  )
}

export default PaletteBox
