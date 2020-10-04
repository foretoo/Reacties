import { h } from 'preact'
import Palette from './palette'
import seedColors from './seedColors'

const App = () => {
  return <Palette {...seedColors[0]} />
}

export default App
