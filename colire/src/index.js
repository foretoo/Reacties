import { h, render } from 'preact'
import { ContextProvider } from './app/context'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './app/app'
import './index.css'

render(
  <ContextProvider>
    <Router basename='/'>
      <App />
    </Router>
  </ContextProvider>,
  window.root
)
