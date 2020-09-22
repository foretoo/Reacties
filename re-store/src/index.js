import { h, render } from 'preact'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/reducer'
import { ContextProvider } from './components/context'
import App from './components/app'
import './index.css'

const store = createStore(reducer)

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
