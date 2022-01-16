import { h, render } from 'preact'
import { HashRouter as Router } from 'react-router-dom'
import { ContextProvider, App } from '@app'
import './index.css'

const root = document.createElement('div')
document.body.prepend(root)
root.id = 'root'

render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>,
  root
)