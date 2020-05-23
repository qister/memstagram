import { createStore, applyMiddleware, compose } from 'redux'
import  rootReducer  from '../Reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// export default function configureStore() {
//     return createStore(rootReducer, applyMiddleware(logger, thunk))
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function configureStore() {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk))); 
} 