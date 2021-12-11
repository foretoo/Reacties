import { h, Fragment } from 'preact'
import { useContext } from 'preact/hooks'
import { Link, useParams } from 'react-router-dom'
import { Context } from '@app'
import {
  Footer,
  Header,
  PaletteListContent,
  ColorListContent,
  SelectColorMode,
  Slider
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

  const overlayShowClass = state.copy.overlay ? ' show' : ''
  const snackBarShow = state.format.animate ? ' show' : ''

  return (
    <>
      <Header className='page-header'>
        <Link to='/' className='page-header-link'>Home</Link>
        {colorID ? null : <Slider id={paletteID} level={palette.activeLevel}/>}
        <SelectColorMode />
      </Header>

      <main class='page-content'>
        <section
          class={'page-overlay' + overlayShowClass + state.copy.lumClass}
          style={{background: state.copy.code}}
        >
          <h1>Copied</h1>
          <span>{state.copy.code}</span>
        </section>
        <Content />
        <aside class={'page-snackbar' + snackBarShow}>
          Format changed to {state.format.label}
        </aside>
      </main>

      <Footer>
        <span>{palette.paletteName}</span>
        <span>{palette.emoji}</span>
      </Footer>
    </>
  )
}

export default Palette
