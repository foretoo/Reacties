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
      <svg className="box-delete-icon"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg">
        <symbol id="line"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          stroke="#b2bec3"
          stroke-width="3"
          stroke-linecap="round" >
          <line
            x1="8"
            y1="20"
            x2="32"
            y2="20" />
        </symbol>
        <g className="g" >
          <use className="l1" href="#line" />
          <use className="l2" href="#line" />
        </g>
      </svg>
      <div className='palette-box-content'>
        {colorList}
      </div>
    </Link>
  )
}

export default PaletteBox
