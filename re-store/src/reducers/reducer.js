const initialState = {
  loading: true,
  books: [],
  error: null,
  cart: {
    books: [
      {
        id: 1,
        title: 'Production-ready Microservices',
        count: 1,
        price: 129,
        imgName: 'prm' },
      {
        id: 2,
        title: 'Realese It!',
        count: 1,
        price: 71,
        imgName: 'rli' }
    ],
    num: 2,
    sum: 200,
  }
}

const getCartBook = (state, id) => {
  const idx = state.cart.books.findIndex(book => book.id === id)
  const book = state.cart.books[idx] || null
  return { book, idx }
}

const updateCartBook = (book, num) => {
  return { ...book, count: (book.count || 0) + num }
}

const updateCart = (state, book, idx, num) => {
  const newCart = state.cart
  if (idx < 0) newCart.books.push(book)
  else if (book.count === 0) newCart.books.splice(idx, 1)
  else newCart.books.splice(idx, 1, book)
  console.log(newCart.books);
  return {
    ...state,
    cart: {
      books: newCart.books,
      num: newCart.num + num,
      sum: newCart.sum + book.price*num
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
      book = idx < 0 ? updateCartBook(action.payload, 1) : updateCartBook(book, 1)
      return updateCart(state, book, idx, 1)
    }

    case 'INC_CART_BOOK': {
      let { book, idx } = getCartBook(state, action.payload)
      book = updateCartBook(book, 1)
      return updateCart(state, book, idx, 1)
    }

    case 'DEC_CART_BOOK': {
      let { book, idx } = getCartBook(state, action.payload)
      book = updateCartBook(book, -1)
      return updateCart(state, book, idx, -1)
    }

    case 'DEL_CART_BOOK': {
      let { book, idx } = getCartBook(state, action.payload)
      book = updateCartBook(book, -book.count)
      return updateCart(state, book, idx, -book.count)
    }

    default:
      return state
  }
}
export default reducer
