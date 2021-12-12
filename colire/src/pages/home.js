import { h, Fragment } from 'preact'
import { useContext, useEffect, useRef } from 'preact/hooks'
import { Link } from 'react-router-dom'
import { Context } from '@app'
import { AddPaletteBtn, Footer, SVGFilter, PaletteBox } from '@components'
import './css/home.css'

const Home = () => {

  const { state: { palettes } } = useContext(Context)
  const paletteLinks = palettes.map( palette => <PaletteBox {...palette}/> )

  const mainRef = useRef()
  const headRef = useRef()
  useEffect(() => {
    const rect = mainRef.current.getBoundingClientRect()
    headRef.current.style.marginLeft = rect.left + 110 + 'px'
  }, [])

  return (
    <>
      <header ref={headRef} className='home-header'>
        <h1>Colllie</h1>
        <span>yor palette lib</span>
      </header>

      <main ref={mainRef} className='home-main'>
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
