import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { Link, Switch, Route } from 'react-router-dom'
import { Context } from '@app'
import SVGFilter from '../components/svg-filter'
import PaletteBox from '../components/palette-box'
import PalettePage from '../components/palette-page'
import NewPalettePage from '../components/new-palette-page'
import './css/app.css'

const App = () => {

  const { state } = useContext(Context)
  const paletteLinks = []

  for (const palette of state.palettes) {
    paletteLinks.push(
      <PaletteBox {...palette}/>
    )
  }

  return (
    <Switch>
      <Route exact path='/'>
        <header class='home-header'>
          <Link to='/new-palette' className='new-palette-button'>New Palette</Link>
        </header>
        <main class='home-main'>
          {paletteLinks}
        </main>
        <footer class='home-footer'></footer>
        <SVGFilter />
      </Route>
      <Route path='/new-palette' component={NewPalettePage} />
      <Route path='/:paletteID/:colorID?' component={PalettePage} />
    </Switch>
  )
}

export default App
