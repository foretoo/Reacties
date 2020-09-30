const initialState = {
  lib: {
    loading: true,
    books: [],
    error: null,
  },
  cart: {
    books: [],
    num: 0,
    sum: 0,
  }
}

const getCartBook = (state, id) => {
  const idx = state.cart.books.findIndex(book => book.id === id)
  const book = state.cart.books[idx] || null
  return { book, idx }
}

const updatedCart = (state, book, idx, num) => {
  const newCart = state.cart
  book.count = book.count || 0
  book.count += num

  if (idx < 0) newCart.books.push(book)
  else if (book.count === 0) newCart.books.splice(idx, 1)
  else newCart.books.splice(idx, 1, book)

  return {
    ...state,
    cart: {
      books: newCart.books,
      num: newCart.num + num,
      sum: newCart.sum + book.price * num
    }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'CLEAR_BOOKS':
      return {
        ...state,
        loading: true,
        books: [],
        error: null
      }
    case 'FETCH_BOOKS_SUCCES':
      return {
        ...state,
        loading: false,
        books: action.payload,
        error: null
      }
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        loading: false,
        books: [],
        error: action.payload
      }

    case 'ADD_CART_BOOK': {
      let { book, idx } = getCartBook(state, action.payload.id)
      if (!book) book = action.payload
      return updatedCart(state, book, idx, 1)
    }

    case 'INC_CART_BOOK': {
      const { book, idx } = getCartBook(state, action.payload)
      return updatedCart(state, book, idx, 1)
    }

    case 'DEC_CART_BOOK': {
      const { book, idx } = getCartBook(state, action.payload)
      return updatedCart(state, book, idx, -1)
    }

    case 'DEL_CART_BOOK': {
      const { book, idx } = getCartBook(state, action.payload)
      const count = -book.count
      return updatedCart(state, book, idx, count)
    }

    default:
      return state
  }
}
export default reducer
