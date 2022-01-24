import { combineReducers } from 'redux'
import recipeReducer from './recipeReducer'
import categoryReducer from './categoryReducer'
import classReducer from './classReducer'
import userReducer from './userReducer'
import ingredientsReducer from "./ingredientsReducer";

const rootReducer = combineReducers({
  recipeReducer,
  categoryReducer,
  classReducer,
  ingredientsReducer,
  userReducer
});

export default rootReducer;
