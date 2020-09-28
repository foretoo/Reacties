import  { booksLoaded, booksError } from './index'
import BookstoreService from '../services/bookstore-service'

const boosto = new BookstoreService()

export const fetchBooks = dispatch => {
  boosto.getBooks()
    .then(books => dispatch(booksLoaded(books)))
    .catch(err => dispatch(booksError(err)))
}
