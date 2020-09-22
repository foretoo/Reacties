import { h, render } from 'preact'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/reducer'
import App from './components/app'
import './index.css'

const store = createStore(reducer)

render(<Provider store={store}><App /></Provider>,	window.root)
