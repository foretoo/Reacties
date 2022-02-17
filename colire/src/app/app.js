import { h } from "preact"
import { Switch, Route } from "react-router-dom"
import { useContext } from "preact/hooks"
import { Context } from "@app"
import { Home, Palette, PaletteEditor } from "@pages"
import { Footer, SwitcherTheme } from "@components"
import "./app.css"

const App = () => {
  const { state: { theme }} = useContext(Context)
  return (
    <div className={`app` + (theme === `dark` ? ` dark-theme` : ``)}>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/create-palette" component={PaletteEditor}/>
        <Route path="/:paletteID/:colorID?" component={Palette}/>
      </Switch>
      <Footer>
        <SwitcherTheme/>
        <a href="https://github.com/foretoo" target="_blank">github.com/foretoo</a>
      </Footer>
    </div>
  )
}

export default App
