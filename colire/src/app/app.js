import { h, Fragment } from 'preact'
import { Link, Route } from 'react-router-dom'
import seedColors from '../seed-colors'
import colorScaler from '../utils/color-scaler'
import PaletteBox from '../components/palette-box'
import Palette from '../components/palette'
import SVGFilter from '../components/svg-filter'
import './css/app.css'

const App = () => {

  const paletteLinks = [], palettePaths = []

  for (const palette of seedColors) {
    paletteLinks.push(<PaletteBox {...palette}/>)
    palettePaths.push(
      <Route path={`/${palette.id}`}>
        <Palette {...colorScaler(palette)}/>
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
