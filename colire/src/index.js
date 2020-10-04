import { h, render } from 'preact'
import { ContextProvider } from './app/context'
import App from './app/app'
import './index.css'

render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  window.root
)
