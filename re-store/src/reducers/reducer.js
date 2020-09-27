const initialState = {
  books: [],
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
    case 'BOOKS_LOADED':
      return {
        ...state,
        books: action.payload
      }
    default:
      return state
  }
}
export default reducer
