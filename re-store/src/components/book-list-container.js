import { h } from 'preact'
import { useEffect } from 'preact/hooks'
import { connect } from 'react-redux'
import ErrorIdicator from './error-indicator'
import Loader from './loader'
import BookList from './book-list'

import { fetchBooks } from '../actions/hof'

const BookListContainer = ({ books, loading, error, fetchBooks }) => {

  useEffect(() => fetchBooks(), [])

  if (error) return <ErrorIdicator />
  else if (loading) return <Loader />
  else return <BookList books={books} />
}

const mapStateToProps = ({ books, loading, error }) => ({ books, loading, error })
const mapDispatchToProps = dispatch => ({ fetchBooks: () => fetchBooks(dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer)
