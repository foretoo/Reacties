import { h } from 'preact'
import { useHistory } from "react-router-dom"

const withMore = List => props => {
  const history = useHistory()
  const WrappedList = List(props).map(Component => {
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

export default withMore
