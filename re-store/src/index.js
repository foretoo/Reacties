import { h, render } from 'preact'
import { Provider } from 'react-redux'
import { ContextProvider } from './components/context'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'
import App from './components/app'
import './index.css'



const HOApp = () => {
  return (
    <Provider store={store}>
      <ContextProvider>
        <Router>
          <App />
        </Router>
      </ContextProvider>
    </Provider>
  )
}

render(<HOApp />,	window.root)
