import { h, Fragment } from "preact"
import { Switch, Route } from "react-router-dom"
import { Home, Palette, PaletteEditor } from "@pages"
import { Footer } from "@components"

const App = () => (
  <>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/create-palette" component={PaletteEditor} />
      <Route path="/:paletteID/:colorID?" component={Palette} />
    </Switch>
    <Footer />
  </>
)

export default App
