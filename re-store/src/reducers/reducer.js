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
    default:
      return state
  }
}
export default reducer
