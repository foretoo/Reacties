import { h, Fragment } from "preact"
import { useContext } from "preact/hooks"
import { Link } from "react-router-dom"
import { Context } from "@app"
import { AddPaletteBtn, SVGFilter, PaletteBox } from "@components"
import "./css/home.css"

const Home = () => {

  const { state: { palettes, theme }, dispatch } = useContext(Context)

  const handleDeletePalette = (id) => {
    dispatch({
      type:    "DELETE_PALETTE",
      payload: id,
    })
  }

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
        y          = {theme === "dark" ?  8    : 16}
        blur       = {theme === "dark" ?  12   : 16}
        brightness = {theme === "dark" ?  0.5  : 2}
        intercept  = {theme === "dark" ? -0.1  : 0.2}
        saturate   = {theme === "dark" ?  1    : 1.333} />
    </>
  )
}

export default Home
