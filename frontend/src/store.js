import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createDevTools } from '@redux-devtools/core';

const reducer = combineReducers({});

const initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState);

export default store;
