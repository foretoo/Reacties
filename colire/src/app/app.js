import { h } from "preact"
import { useLayoutEffect } from "preact/hooks"
import { Switch, Route, Redirect, useLocation } from "react-router-dom"
import { useAgent } from "./ctx"
import { Home, Palette, Editor } from "@pages"
import { Footer } from "@assets"
import { SwitcherTheme } from "@components"
import "./app.css"

const App = () => {
  
  const { actualTheme } = useAgent()
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    document.body.style.background =
      actualTheme === "dark" ? "#141414" : "#e6e6e6"
  }, [ actualTheme ])

  return (
    <div className={`app` + (actualTheme === `dark` ? ` dark-theme` : ``)}>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Redirect from="/:url+" exact strict to={pathname + "/"} />
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
