import { h, render } from 'preact'
import { HashRouter as Router } from 'react-router-dom'
import { ContextProvider, App } from '@app'
import './index.css'

render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>,
  window.root
)
