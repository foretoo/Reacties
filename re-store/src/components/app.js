import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { connect } from 'react-redux'
import { Context } from './context'
import ErrorCatcher from './error'
import Loader from './loader'

import './app.css'

const App = ({ str }) => {
  const { cnx } = useContext(Context)
  return (
    <ErrorCatcher>
      <div>{str.concat(' ', cnx)}</div>
      <Loader />
    </ErrorCatcher>
  )
}

const mapStateToProps = state => ({ str: state })

export default connect(mapStateToProps)(App)
