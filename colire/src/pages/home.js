import { h, Fragment } from 'preact'
import { useContext } from 'preact/hooks'
import { Link } from 'react-router-dom'
import { Context } from '@app'
import { AddPaletteBtn, Footer, SVGFilter, PaletteBox } from '@components'
import './css/home.css'

const Home = () => {

  const { state: { palettes } } = useContext(Context)
  const paletteLinks = palettes.map( palette => <PaletteBox {...palette}/> )

  return (
    <>
      <main className='home-main'>

        <header className='home-header'>
          <h1>Colllie</h1>
          <span>yor palette lib</span>
        </header>

        <Link to='/create-palette'>
          <AddPaletteBtn />
        </Link>

        {paletteLinks}

      </main>

      <Footer>
        <a href='https://github.com/foretoo'>github.com/foretoo</a>
      </Footer>

      <SVGFilter />
    </>
  )
}

export default Home
