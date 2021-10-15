import { h } from 'preact'
import { Link } from 'react-router-dom'
import './css/palette-box.css'

const PaletteBox = ({ id, paletteName, colors }) => {
  const colorList = []
  for (const color in colors) {
    const style = { background: colors[color][500].hex }
    colorList.push(<div class='palette-box-color' style={style}></div>)
  }
  const height = `${Math.ceil(colorList.length / 5) * 2 + 6}em`
  console.log(height);
  return (
    <Link to={`/${id}/`} className='palette-box' style={{ height }}>
      <div class='palette-box-name'>{paletteName}</div>
      {colorList}
    </Link>
  )
}

export default PaletteBox
