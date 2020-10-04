import { h } from 'preact'
import { useContext } from 'preact/hooks'
import Palette from '../components/palette'
import { Context } from './context'

const App = () => {
  const { seedColors } = useContext(Context)
  return <Palette {...seedColors[1]} />
}

export default App
