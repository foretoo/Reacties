import { h, Fragment } from 'preact'
import { useContext } from 'preact/hooks'
import { Link } from 'react-router-dom'
import { Context } from '@app'
import { Footer, Header, SVGFilter, PaletteBox } from '@components'
import './css/home.css'

const Home = () => {

  const { state: { palettes } } = useContext(Context)
  const paletteLinks = palettes.map( palette => <PaletteBox {...palette}/> )

  return (
    <>
      <Header className='home-header'>
        <Link to='/create-palette' className='new-palette-button'>Create Palette</Link>
      </Header>

      <main class='home-main'>
        {paletteLinks}
      </main>

      <Footer className='home-footer'></Footer>

      <SVGFilter />
    </>
  )
}

export default Home
