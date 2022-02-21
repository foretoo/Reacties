import { h, Fragment } from "preact"
import { Link } from "react-router-dom"
import { useCtx, useConst } from "@utils/hooks"
import { AddPaletteBtn, SVGFilter, PaletteBox } from "@components"
import "./css/home.css"

const Home = () => {

  const { state: { palettes, actualTheme }, dispatch } = useCtx()

  const handleDeletePalette = useConst((id) => {
    dispatch({
      type:    "DELETE_PALETTE",
      payload: id,
    })
  })

  const paletteLinks = palettes.map((palette) => (
    <PaletteBox handleDeletePalette={handleDeletePalette} {...palette} />
  ))

  return (
    <>
      <main className="home-main">

        <header className="home-header">
          <h1>Colllie</h1>
          <span>yor palette lib</span>
        </header>

        <Link to="/create-palette">
          <AddPaletteBtn />
        </Link>

        {paletteLinks}

      </main>

      <SVGFilter
        y          = {actualTheme === "dark" ?  8    : 16}
        blur       = {actualTheme === "dark" ?  12   : 16}
        brightness = {actualTheme === "dark" ?  0.75 : 2}
        intercept  = {actualTheme === "dark" ? -0.1  : 0.2}
        saturate   = {actualTheme === "dark" ?  1    : 1.333} />
    </>
  )
}

export default Home
