import { h, Fragment } from "preact"
import { Link, useHistory } from "react-router-dom"
import { useAgent, usePalettesDispatch } from "@app/ctx"
import { useConst } from "@utils/hooks"
import { Button, Header } from "@assets"
import "./css/page-header.css"

const PageHeader = ({ palette, color, editor }) => {

  const history = useHistory()
  const dispatch = usePalettesDispatch()
  const { agent } = useAgent()
  const isMobile = agent.width < 769 ? true : false

  const handleExport = useConst(() => {
    dispatch({ type: "EXPORT_CONTENT_TOGGLE" })
  })
  const handleDelete = useConst(() => {
    dispatch({
      type:    "DELETE_PALETTE",
      payload: palette.id,
    })
    history.push("/")
  })
  const handleEdit = useConst(() => {
    history.push("edit")
  })
  const handleBack = useConst((path) => {
    const link = path[path.length - 2].link
    history.push(link)
  })
  const toggleMenu = useConst(() => {
    document.querySelector("header").classList.toggle("expanded")
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
  const Navigation = useConst(({ path }) => (
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
  ))
  const Back = useConst(({ path }) => (
    <>
      <svg xmlns="http://www.w3.org/2000/svg"
        width="30" height="30" viewBox="0 0 30 30"
        className="nav-icon back"
        fill="none"
        stroke-width={2}
        stroke-linejoin="round"
        stroke-linecap="round"
        onClick={() => handleBack(path)} >
        <path d="M20 6L8 15L20 24" />
      </svg>
      {(editor && palette)
        ? <>
            <span className="nav-current">{palette.name}</span>
            <span className="nav-emoji">{palette.emoji}</span>
          </>
        : <Navigation path={path.slice(-1)} />
      }
    </>
  ))
  const Menu = () => (
    <div className="header-menu">
      <Button name="Export"
        type="idle"
        size={33}
        onClick={handleExport} />
      {!color &&
        <>
          <Button name="Edit"
            type="idle"
            size={33}
            onClick={handleEdit} />
          <Button name="Delete"
            type="idle"
            size={33}
            onClick={handleDelete} />
        </>
      }
    </div>
  )
  const MenuIcon = useConst(() => (
    <svg xmlns="http://www.w3.org/2000/svg"
      width="30" height="30" viewBox="0 0 30 30"
      className="nav-icon menu"
      stroke-width={2}
      stroke-linecap="round"
      onClick={toggleMenu} >
      <path d="M4 6h22 M4 15h22 M4 24h22" />
    </svg>
  ))

  return (
    <Header className={isMobile ? "mobile" : ""}>
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