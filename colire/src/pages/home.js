import { h, Fragment } from "preact"
import { Link } from "react-router-dom"
import { useAgent, usePalettes } from "@app/ctx"
import { AddPaletteBtn, SVGFilter, PaletteBox } from "@components"
import "./css/home.css"

const Home = () => {

  const { palettes } = usePalettes()
  const { actualTheme } = useAgent()

  const paletteLinks = palettes.map((palette) => (
    <PaletteBox {...palette} />
  ))

  return (
    <>
      <main className="home-main">

        <header className="home-header">
          <h1>Colllie</h1>
          <span>your palette lib</span>
        </header>

        <Link to="/create-palette">
          <AddPaletteBtn />
        </Link>

        {paletteLinks}

      </main>

      <SVGFilter
        y          = {actualTheme === "dark" ?  8    : 12}
        blur       = {actualTheme === "dark" ?  12   : 16}
        brightness = {actualTheme === "dark" ?  0.75 : 2}
        intercept  = {actualTheme === "dark" ? -0.06 : 0.1}
        saturate   = {actualTheme === "dark" ?  1    : 1.333} />
    </>
  )
}

export default Home
