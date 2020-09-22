import { h, render } from 'preact'
import { Provider } from 'react-redux'
import { ContextProvider } from './components/context'
import store from './store'
import App from './components/app'
import './index.css'



const HOApp = () => {
  return (
    <Provider store={store}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Provider>
  )
}

render(<HOApp />,	window.root)
