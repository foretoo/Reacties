import { h } from 'preact'
import { connect } from 'react-redux'

const App = ({ str }) => {
  return str
}

const mapStateToProps = state => ({ str: state })

export default connect(mapStateToProps)(App)
