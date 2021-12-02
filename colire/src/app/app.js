import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { Switch, Route } from 'react-router-dom'
import { Home, Palette, PaletteEditor } from '@pages'

const App = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/new-palette' component={PaletteEditor} />
      <Route path='/:paletteID/:colorID?' component={Palette} />
    </Switch>
  )
}

export default App
