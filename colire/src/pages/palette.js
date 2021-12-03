import { h, Fragment } from 'preact'
import { useContext, useState, useEffect } from 'preact/hooks'
import { Link, useParams } from 'react-router-dom'
import { Context } from '@app'
import { Footer, Header, PaletteListContent, ColorListContent, SelectColorMode } from '@components'
import { useDynamicImport } from '@utils/helpers'
import 'rc-slider/assets/index.css'
import './css/page.css'
import './css/rc-slider.css'

const Palette = () => {

  const { state, dispatch } = useContext(Context)
  const { paletteID, colorID } = useParams()
  const palette = state.palettes.find(palette => palette.id === paletteID)

  const Slider = useDynamicImport('Slider', () => import(
      /* webpackChunkName: "rc-slider" */
      /* webpackMode: "lazy" */
      /* webpackPrefetch: true */
      'rc-slider'
    )
  )
  const slider = colorID ? null :
    <Slider
      defaultValue={palette.activeLevel}
      min={100}
      max={900}
      step={100}
      onChange={handleChangeLevel}
    />

  const handleChangeLevel = level => {
    dispatch({
      type: 'CHANGE_PALETTE_LEVEL',
      payload: { id: paletteID, level }
    })
  }


  const content = colorID
    ? <ColorListContent colors={palette.colors[colorID]} />
    : <PaletteListContent colors={palette.colors} activeLevel={palette.activeLevel} />
  const overlayShow = state.copy.animate ? ' show' : ''
  const snackBarShow = state.format.animate ? ' show' : ''
  return (
    <>
      <Header className='page-header'>
        <Link to='/' className='page-header-link'>Home</Link>
        {slider}
        <SelectColorMode />
      </Header>

      <main class='page-content'>
        <section class={'page-overlay' + overlayShow + state.copy.class}>
          <h1>Copied</h1>
          <span>{state.copy.code}</span>
        </section>
        {content}
        <aside class={'page-snackbar' + snackBarShow}>
          Format changed to {state.format.label}
        </aside>
      </main>

      <Footer className='page-footer'>
        <span>{palette.paletteName}</span>
        <span>{palette.emoji}</span>
      </Footer>
    </>
  )
}

export default Palette
