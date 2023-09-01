import { combineReducers } from 'redux'
import articleReducer from './articleReducers'

const rootReducer = combineReducers({
  articles: articleReducer,
})

export default rootReducer
