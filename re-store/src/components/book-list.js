import { h } from 'preact'
import BookItem from './book-item'

const BookList = ({ books }) => {
  const list = books.map(book => {
    return <BookItem key={book.id} book={book} />
  })
  return <ul>{list}</ul>
}
export default BookList
