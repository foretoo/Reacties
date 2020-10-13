import { h, render } from 'preact'
import { ContextProvider } from './app/context'
import { HashRouter as Router } from 'react-router-dom'
import App from './app/app'
import SVGFilter from './components/svg-filter'
import './index.css'

render(
  <ContextProvider>
    <Router>
      <App />
      <SVGFilter />
    </Router>
  </ContextProvider>,
  document.body
)
