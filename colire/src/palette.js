import { h } from 'preact'
import ColorBox from './color-box'

const Palette = ({ paletteName, id, emoji, colors }) => {

  const colorsList = colors.map(color => {
    return <ColorBox key={color.name} {...color} />
  })

  return (
    <div class='palette'>
      <header></header>
      <main class='palette-colors'>
        {paletteName}
        {colorsList}
      </main>
      <footer></footer>
    </div>
  )
}

export default Palette
