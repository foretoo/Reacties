import { h, render } from 'preact'
import { Provider } from 'react-redux'
import { ContextProvider } from './app/context'
import { HashRouter as Router } from 'react-router-dom'
import store from './app/store'
import App from './app/app'
import './index.css'



render(
  <Provider store={store}>
    <ContextProvider>
      <Router>
        <App />
      </Router>
    </ContextProvider>
  </Provider>,
  window.root
)
