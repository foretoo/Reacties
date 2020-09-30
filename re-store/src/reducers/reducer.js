const initialState = {
  lib: {
    loading: true,
    books: [],
    error: null
  },
  cart: {
    books: [],
    num: 0,
    sum: 0
  }
}

const updateLib = ({ type, payload }) => {
  switch (type) {
    case 'CLEAR_BOOKS':
      return {
        loading: true,
        books: [],
        error: null
      }
    case 'FETCH_BOOKS_SUCCES':
      return {
        loading: false,
        books: payload,
        error: null
      }
    case 'FETCH_BOOKS_FAILURE':
      return {
        loading: false,
        books: [],
        error: payload
      }
  }
}

const updateCart = (cart, action) => {

  const getCartBook = (cart, id) => {
    const idx = cart.books.findIndex(book => book.id === id)
    const book = cart.books[idx] || null
    return { book, idx }
  }

  const updatedCartList = (cart, book, idx, num) => {
    const newCart = cart
    book.count = book.count || 0
    book.count += num
    if (idx < 0) newCart.books.push(book)
    else if (book.count === 0) newCart.books.splice(idx, 1)
    else newCart.books.splice(idx, 1, book)
    return {
      books: newCart.books,
      num: newCart.num + num,
      sum: newCart.sum + book.price * num
    }
  }

  switch (action.type) {
    case 'ADD_CART_BOOK': {
      let { book, idx } = getCartBook(cart, action.payload.id)
      if (!book) book = action.payload
      return updatedCartList(cart, book, idx, 1)
    }
    case 'INC_CART_BOOK': {
      const { book, idx } = getCartBook(cart, action.payload)
      return updatedCartList(cart, book, idx, 1)
    }
    case 'DEC_CART_BOOK': {
      const { book, idx } = getCartBook(cart, action.payload)
      return updatedCartList(cart, book, idx, -1)
    }
    case 'DEL_CART_BOOK': {
      const { book, idx } = getCartBook(cart, action.payload)
      const count = -book.count
      return updatedCartList(cart, book, idx, count)
    }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLEAR_BOOKS':
    case 'FETCH_BOOKS_SUCCES':
    case 'FETCH_BOOKS_FAILURE':
      return { ...state, lib: updateLib(action) }
    case 'ADD_CART_BOOK':
    case 'INC_CART_BOOK':
    case 'DEC_CART_BOOK':
    case 'DEL_CART_BOOK':
      return { ...state, cart: updateCart(state.cart, action) }
    default:
      return state
  }
}
export default reducer
