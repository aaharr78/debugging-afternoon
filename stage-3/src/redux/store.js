import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer';
import PromiseMiddleware from 'redux-promise-middleware';

export default createStore(reducer, applyMiddleware(PromiseMiddleware()));