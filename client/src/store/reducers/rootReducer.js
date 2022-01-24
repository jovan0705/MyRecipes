import { combineReducers } from 'redux'
import recipeReducer from './recipeReducer'
import categoryReducer from './categoryReducer'
import classReducer from './classReducer'

const rootReducer = combineReducers({
  recipeReducer,
  categoryReducer,
  classReducer
})

export default rootReducer
