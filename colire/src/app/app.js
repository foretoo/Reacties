import { h, Fragment } from 'preact'
import { useContext } from 'preact/hooks'
import { Link, Route } from 'react-router-dom'
import { Context } from './context'
import PaletteBox from '../components/palette-box'
import Page from '../components/page'
import './css/app.css'

const App = () => {

  const { state } = useContext(Context)
  const paletteLinks = [], palettePaths = []

  for (const palette of state.palettes) {
    paletteLinks.push(
      <PaletteBox {...palette}/>
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
      <Route path='/:paletteID/:colorID?' component={Page} />
    </>
  )
}

export default App
