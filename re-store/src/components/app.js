import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { connect } from 'react-redux'
import { Context } from './context'
import ErrorCatcher from './error'
import Loader from './loader'

import './app.css'

const App = ({ state }) => {
  const { cnx } = useContext(Context)
  return (
    <ErrorCatcher>
      {state}
      <Loader />
    </ErrorCatcher>
  )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(App)
