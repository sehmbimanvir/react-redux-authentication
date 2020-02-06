import AuthReducer from './reducers/auth.reducer'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

const allReducers = combineReducers({
  auth: AuthReducer
})

export default createStore(allReducers, applyMiddleware(thunk))