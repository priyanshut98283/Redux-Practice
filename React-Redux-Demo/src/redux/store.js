import {createStore,applyMiddleware} from 'redux'
import rootReducer from './rootReducer'
// using extension->
import { composeWithDevTools } from 'redux-devtools-extension';

import logger from 'redux-logger'
// See results in browser console...
import thunk from 'redux-thunk'

// extension usage- composeWithDevTools(applyMiddleware(logger))
const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))

export default store