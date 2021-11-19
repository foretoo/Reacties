import paletteReducer from './palette-reducer'
import newPaletteReducer from './new-palette-reducer'

const reduceReducers = (...reducers) => (state, action) =>
  reducers.reduce((acc, nextReducer) => nextReducer(acc, action), state);

export default reduceReducers(
  paletteReducer,
  newPaletteReducer
)
