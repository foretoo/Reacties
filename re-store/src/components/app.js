import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { connect } from 'react-redux'
import { Context } from './context'

const App = ({ str }) => {
  const { cnx } = useContext(Context)
  return str + ' ' + cnx
}

const mapStateToProps = state => ({ str: state })

export default connect(mapStateToProps)(App)
