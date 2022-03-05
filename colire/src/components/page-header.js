import { h, Fragment } from "preact"
import { Link, useHistory } from "react-router-dom"
import { useAgent } from "@app/ctx"
import { usePalettesDispatch } from "@app/ctx"
import { useConst } from "@utils/hooks"
import { Button, Header } from "@assets"
import "./css/header.css"

const PageHeader = ({ palette, color, editor }) => {

  const history = useHistory()
  const dispatch = usePalettesDispatch()
  const { agent: { width }} = useAgent()

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

  const isCreatePalettePage =  editor && !palette
  const isPalettePage       = !editor && !color

  return (
    <Header>
      <nav className="header-nav">
        <Link className="nav-link" to="/">root</Link>
        <span className="nav-slash">/</span>
        {(isCreatePalettePage || isPalettePage)
          ? <>
              <span className="nav-palette-name">
                {editor ? "Create palette": palette.name}
              </span>
              <span className="nav-palette-emoji">
                {editor ? "🧑‍🎨" : palette.emoji}
              </span>
            </>
          : <> {/* IF "PALETTE EDIT" || "COLOR" PAGE */}
              <Link to={`/${palette.id}/`}>
                <span>{palette.name}</span>
                <span className="nav-palette-emoji">{palette.emoji}</span>
              </Link>
              <span className="nav-slash">/</span>
              <span className="nav-palette-name">
                {editor ? "edit" : color.name}
              </span>
            </>
        }
      </nav>
      {!editor &&
        <div className="header-menu">
          <Button name="Export"
            type="idle"
            size={35}
            onClick={() => {}} />
          {!color &&
            <>
              <Button name="Edit"
                type="idle"
                size={35}
                onClick={handleEditPalette} />
              <Button name="Delete"
                type="idle"
                size={35}
                onClick={handleDeletePalette} />
            </>
          }
        </div>
      }
    </Header>
  )
}

export default PageHeader
