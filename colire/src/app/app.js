import { h, Fragment } from 'preact'
import { useContext } from 'preact/hooks'
import { Link, Route } from 'react-router-dom'
import Palette from '../components/palette'
import { Context } from './context'
import './app.css'

const App = () => {

  const { seedColors } = useContext(Context)
  const paletteLinks = [], palettePaths = []

  for (const palette of seedColors) {
    paletteLinks.push(
      <Link to={palette.id} class='palette-box'>
        <div class='palette-box-name'>{palette.paletteName}</div>
      </Link>
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
    </>
  )
}

export default App
