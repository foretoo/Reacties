import reduceLib from './reduceLib'
import reduceCart from './reduceCart'

const reducer = (state = {}, action) => {
  return {
    lib: reduceLib(state.lib, action),
    cart: reduceCart(state.cart, action)
  }
}
export default reducer
