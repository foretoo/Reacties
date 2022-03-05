import {
  editPaletteReducer,
} from "./reducers"

const reduceReducers = (...reducers) =>
  (state, action) =>
    reducers.reduce(
      (acc, nextReducer) => nextReducer(acc, action),
      state
    )

export default reduceReducers(
  editPaletteReducer,
)
