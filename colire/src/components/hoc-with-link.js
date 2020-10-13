import { h } from 'preact'
import { useHistory } from "react-router-dom"

const withLink = List => props => {
  const WrappedList = List(props).map(Component => {
    const history = useHistory()
    const handleColorPage = e => {
      e.stopPropagation()
      history.push(Component.props.id)
    }
    const button = <button class='color-box-info-more' onClick={handleColorPage}>MORE</button>
    Component.props.button = button
    return Component
  })
  return WrappedList
}

export default withLink
