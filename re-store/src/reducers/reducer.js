const updateLib = (lib, { type, payload }) => {

  if (!lib) {
    lib = {
      loading: true,
      books: [],
      error: null
    }
  }

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
    default:
      return lib
  }
}

const updateCart = (cart, { type, payload }) => {

  if (!cart) {
    cart = {
      books: [],
      num: 0,
      sum: 0
    }
  }

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

  switch (type) {
    case 'ADD_CART_BOOK': {
      let { book, idx } = getCartBook(cart, payload.id)
      if (!book) book = payload
      return updatedCartList(cart, book, idx, 1)
    }
    case 'INC_CART_BOOK': {
      const { book, idx } = getCartBook(cart, payload)
      return updatedCartList(cart, book, idx, 1)
    }
    case 'DEC_CART_BOOK': {
      const { book, idx } = getCartBook(cart, payload)
      return updatedCartList(cart, book, idx, -1)
    }
    case 'DEL_CART_BOOK': {
      const { book, idx } = getCartBook(cart, payload)
      return updatedCartList(cart, book, idx, -book.count)
    }
    default:
      return cart
  }
}

const reducer = (state = {}, action) => {
  return {
    lib: updateLib(state.lib, action),
    cart: updateCart(state.cart, action)
  }
}
export default reducer
