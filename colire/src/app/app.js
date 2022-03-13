import { h } from "preact"
import { Switch, Route } from "react-router-dom"
import { useAgent } from "./ctx"
import { Home, Palette, Editor } from "@pages"
import { Footer } from "@assets"
import { SwitcherTheme } from "@components"
import "./app.css"

const App = () => {
  const { actualTheme } = useAgent()
  return (
    <div className={`app` + (actualTheme === `dark` ? ` dark-theme` : ``)}>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/create-palette" component={Editor}/>
        <Route path="/:paletteID/edit" component={Editor}/>
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
