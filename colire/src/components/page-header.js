import { h, Fragment } from "preact"
import { useRef } from "preact/hooks"
import { Link, useHistory } from "react-router-dom"
import { useAgent, usePalettesDispatch } from "@app/ctx"
import { useConst } from "@utils/hooks"
import { Button, Header } from "@assets"
import "./css/header.css"

const PageHeader = ({ palette, color, editor }) => {

  const history = useHistory()
  const dispatch = usePalettesDispatch()
  const { agent } = useAgent()
  const isMobile = agent.width < 769 ? true : false
  const menuRef = useRef()

  const handleExport = useConst(() => {
    dispatch({ type: "EXPORT_CONTENT_TOGGLE" })
  })
  const handleDeletePalette = useConst(() => {
    dispatch({
      type:    "DELETE_PALETTE",
      payload: palette.id,
    })
    history.push("/")
  })
  const handleEditPalette = useConst(() => {
    history.push("edit")
  })
  const handleBack = useConst((path) => {
    const link = path[path.length - 2].link
    history.push(link)
  })
  const toggleMenu = useConst(() => {
    // menuRef.current.classList.toggle("hidden")
    document.querySelector(".header").classList.toggle("expanded")
  })

  const getPath = () => {
    const path = [{ name: "root", link: "/" }]
    if (editor && !palette) {
      path.push({ name: "Create palette" })
      return path
    }
    else if (!editor && !color) {
      path.push({
        name: palette.name,
        emoji: palette.emoji
      })
      return path
    }
    else {
      path.push({
        name: palette.name,
        emoji: palette.emoji,
        link: `/${palette.id}/`
      })
      if (editor) {
        path.push({ name: "edit" })
        return path
      }
      else {
        path.push({ name: color.name })
        return path
      }
    }
  }
  const Navigation = ({ path }) => (
    path.map(({ link, name, emoji }) => (
      link
      ? <>
          <Link className="nav-link" to={link}>
            <span>{name}</span>
            {emoji ? <span className="nav-emoji">{emoji}</span> : null}
          </Link>
          <span className="nav-slash">/</span>
        </>
      : <>
          <span className="nav-current">{name}</span>
          {emoji ? <span className="nav-emoji">{emoji}</span> : null}
        </>
    ))
  )
  const Back = ({ path }) => (
    <>
      <span className="nav-link" onClick={() => handleBack(path)}>back</span>
      {(editor && palette)
        ? <>
            <span className="nav-current">{palette.name}</span>
            <span className="nav-emoji">{palette.emoji}</span>
          </>
        : <Navigation path={path.slice(-1)} />
      }
    </>
  )
  const Menu = () => (
    <div ref={menuRef}
      className={
        /*`header-menu${isMobile ? ` hidden` : ``}`*/
        "header-menu"
        }>
      <Button name="Export"
        type="idle"
        size={33}
        onClick={handleExport} />
      {!color &&
        <>
          <Button name="Edit"
            type="idle"
            size={33}
            onClick={handleEditPalette} />
          <Button name="Delete"
            type="idle"
            size={33}
            onClick={handleDeletePalette} />
        </>
      }
    </div>
  )
  const MenuIcon = () => (
    <span className="menu-icon" onClick={toggleMenu}>menu</span>
  )

  return (
    <Header className={isMobile ? `mobile` : ``}>
      <nav className="header-nav">
        {!isMobile
          ? <Navigation path={getPath()} />
          : <Back path={getPath()} />
        }
        {isMobile && !editor && <MenuIcon />}
      </nav>
      {!editor && <Menu />}
    </Header>
  )
}

export default PageHeader