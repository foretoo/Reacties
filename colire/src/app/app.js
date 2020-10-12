import { h, Fragment } from 'preact'
import { useContext } from 'preact/hooks'
import { Link, Route } from 'react-router-dom'
import { Context } from './context'
import PaletteBox from '../components/palette-box'
import Palette from '../components/palette'
import SVGFilter from '../components/svg-filter'
import './css/app.css'

const App = () => {

  const { state } = useContext(Context)
  const paletteLinks = [], palettePaths = []

  for (const palette of state.palettes) {
    paletteLinks.push(
      <PaletteBox {...palette}/>
    )
    palettePaths.push(
      <Route path={`/${palette.id}`}>
        <Palette {...palette}/>
      </Route>
    )
  }

  return (
    <>
      <Route path='/' exact>
        <header class='home-header'></header>
        <main class='home-main'>
          {paletteLinks}
        </main>
        <footer class='home-footer'></footer>
      </Route>
      {palettePaths}
      <SVGFilter />
    </>
  )
}

export default App
