import { h, render } from 'preact'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './reducer'
import App from './app'
import './style.css'

const store = createStore(reducer)

render(<Provider store={store}><App /></Provider>,	window.root)
