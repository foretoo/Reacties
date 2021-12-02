import { h, Fragment } from 'preact'
import { useContext } from 'preact/hooks'
import { Link } from 'react-router-dom'
import { Context } from '@app'
import { SVGFilter, PaletteBox } from '@components'
import './home.css'

const Home = () => {

  const { state } = useContext(Context)
  const paletteLinks = state.palettes.map( palette => <PaletteBox {...palette}/> )

  return (
    <>
      <header class='home-header'>
        <Link to='/create-palette' className='new-palette-button'>Create Palette</Link>
      </header>

      <main class='home-main'>
        {paletteLinks}
      </main>

      <footer class='home-footer'></footer>

      <SVGFilter />
    </>
  )
}

export default Home
