import { combineReducers } from 'redux'
import recipeReducer from './recipeReducer'
import categoryReducer from './categoryReducer'
import classReducer from './classReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  recipeReducer,
  categoryReducer,
  classReducer,
  userReducer
})

export default rootReducer
