import { h, Fragment } from 'preact'
import { useContext } from 'preact/hooks'
import { Link, useParams } from 'react-router-dom'
import { Context } from '@app'
import {
  Header,
  Overlay,
  PaletteListContent,
  ColorListContent,
  SwitcherMode,
  Slider,
  Snackbar
} from '@components'
import { useVar } from '@utils/hooks'
import './css/page.css'

const Palette = () => {

  const { state, dispatch } = useContext(Context)
  const { paletteID, colorID } = useParams()
  const palette = state.palettes.find(palette => palette.id === paletteID)

  const handleCopy = useVar((code, lumClass) => {
    dispatch({
      type: 'COPY',
      payload: { code, lumClass }
    })
    dispatch({ type: 'COPY_OVERLAY_SHOW' })
    setTimeout(() => {
      dispatch({ type: 'COPY_OVERLAY_HIDE' })
    }, 1600)
  })

  const Content = () => (
    colorID
    ? <ColorListContent
        colors={palette.colors[colorID]}
        handleCopy={handleCopy} />
    : <PaletteListContent
        colors={palette.colors}
        activeLevel={palette.activeLevel}
        handleCopy={handleCopy} />
  )

  return (
    <>
      <Header>
        <nav className='nav'>
          <Link className='nav-root' to='/'>root</Link>
          <span className='nav-slash'>/</span>
          <span className='nav-palette-name'>{palette.paletteName}</span>
          <span className='nav-palette-emoji'>{palette.emoji}</span>
        </nav>
        <section className='controls'>
          {colorID ? null : <Slider id={paletteID} level={palette.activeLevel}/>}
          <SwitcherMode />
        </section>
      </Header>

      <main class='content-container'>
        <Snackbar />
        <Overlay />
        <Content />
      </main>
    </>
  )
}

export default Palette
