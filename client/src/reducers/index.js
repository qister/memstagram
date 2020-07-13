import { combineReducers } from 'redux'
import authReducer from './authReducer'
import reducer from './reducer'

const rootReducer = combineReducers({
  authorization: authReducer,
  reducer: reducer
})

export default rootReducer