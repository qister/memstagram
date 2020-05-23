import memeListReducer from './memeListReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    memeList: memeListReducer
})

export default rootReducer