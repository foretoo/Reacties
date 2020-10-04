import { h } from 'preact'

const Palette = ({ paletteName, id, emoji, colors }) => {

  return (
    <div class='palette'>
      <header></header>
      <main class='palette-colors'>
        Palette
      </main>
      <footer></footer>
    </div>
  )
}

export default Palette
