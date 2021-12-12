import { h, Fragment } from 'preact'
import { useContext } from 'preact/hooks'
import { Link, useParams } from 'react-router-dom'
import { Context } from '@app'
import {
  Footer,
  Header,
  Overlay,
  PaletteListContent,
  ColorListContent,
  SelectColorMode,
  Slider,
  Snackbar
} from '@components'
import './css/page.css'

const Palette = () => {

  const { state } = useContext(Context)
  const { paletteID, colorID } = useParams()
  const palette = state.palettes.find(palette => palette.id === paletteID)

  const Content = () => (
    colorID
    ? <ColorListContent colors={palette.colors[colorID]} />
    : <PaletteListContent colors={palette.colors} activeLevel={palette.activeLevel} />
  )

  return (
    <>
      <Header className='page-header'>
        <Link to='/' className='page-header-link'>Home</Link>
        {colorID ? null : <Slider id={paletteID} level={palette.activeLevel}/>}
        <SelectColorMode />
      </Header>

      <main class='content-container'>
        <Snackbar />
        <Overlay />
        <Content />
      </main>

      <Footer>
        <span>{palette.paletteName}</span>
        <span>{palette.emoji}</span>
      </Footer>
    </>
  )
}

export default Palette
