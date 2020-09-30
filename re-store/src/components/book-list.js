import { h } from 'preact'
import { connect } from 'react-redux'
import { addCartBook } from '../actions'
import BookItem from './book-item'

const BookList = ({ books, addCartBook }) => {
  const list = books.map(book => {
    return (
      <BookItem
        key={book.id}
        book={book}
        addCartBook={() => addCartBook(book.id)}
      />
    )
  })
  return <ul>{list}</ul>
}

const mapDispatchToProps = dispatch => {
  return {
    addCartBook: id => dispatch(addCartBook(id))
  }
}

export default connect(null, mapDispatchToProps)(BookList)
