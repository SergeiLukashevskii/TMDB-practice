import { combineReducers, createStore, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import testReducer from './reducers/testReducer'
import userReducer from './reducers/userReducer'




const reducer = combineReducers({ testReducer: testReducer, userReducer: userReducer })


export default createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk),

));