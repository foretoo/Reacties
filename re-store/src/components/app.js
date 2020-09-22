import { h } from 'preact'
import ErrorCatcher from './error'
import Loader from './loader'

import './app.css'

const App = () => {
  return (
    <ErrorCatcher>
      <Loader />
    </ErrorCatcher>
  )
}

export default App
