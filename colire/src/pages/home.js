import { h, Fragment } from 'preact'
import { useContext } from 'preact/hooks'
import { Link } from 'react-router-dom'
import { Context } from '@app'
import { AddPaletteBtn, SVGFilter, PaletteBox } from '@components'
import './css/home.css'

const Home = () => {

  const { state: { palettes } } = useContext(Context)
  const paletteLinks = palettes.map( palette => <PaletteBox {...palette}/> )

  return (
    <>
      <main class='home-main'>
        <Link to='/create-palette'>
          <AddPaletteBtn />
        </Link>
        {paletteLinks}
      </main>

      <SVGFilter />
    </>
  )
}

export default Home
