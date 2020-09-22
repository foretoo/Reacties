import { h } from 'preact'
import { useEffect, useContext } from 'preact/hooks'
import { connect } from 'react-redux'
import { Context } from '../app/context'
import BookItem from './book-item'
import * as actions from '../actions'

const BookList = ({ books, booksLoaded }) => {

  const { boosto } = useContext(Context)

  useEffect(() => {
    const books = boosto.getBooks()
    booksLoaded(books)
  }, [])

  const list = books.map(book => {
    return <BookItem key={book.id} book={book} />
  })

  return (
    <ul>
      {list}
    </ul>
  )
}

const mapStateToProps = state => state

export default connect(mapStateToProps, actions)(BookList)
