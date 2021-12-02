import { h, Fragment } from 'preact'
import { useContext } from 'preact/hooks'
import { Link } from 'react-router-dom'
import { Context } from '@app'
import { SVGFilter, PaletteBox } from '@components'

const Home = () => {

  const { state } = useContext(Context)
  const paletteLinks = state.palettes.map( palette => <PaletteBox {...palette}/> )

  return (
    <>
      <header class='home-header'>
        <Link to='/new-palette' className='new-palette-button'>New Palette</Link>
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
