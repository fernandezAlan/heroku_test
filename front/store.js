import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/index.js';



export default createStore(reducer, applyMiddleware(createLogger(), thunkMiddleware));