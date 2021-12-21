import { h, Fragment } from 'preact'
import { useContext } from 'preact/hooks'
import { Switch, Route } from 'react-router-dom'
import { Home, Palette, PaletteEditor } from '@pages'
import { Footer } from '@components'

const App = () => {
  return (
    <>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/create-palette' component={PaletteEditor} />
        <Route path='/:paletteID/:colorID?' component={Palette} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
