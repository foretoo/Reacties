import { h, render } from 'preact'
import { HashRouter as Router } from 'react-router-dom'
import { ContextProvider, App } from '@app'
import './index.css'

const root = document.createElement('div')
root.id = 'root'

render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>,
  root
)

document.body.prepend(root)
