import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';
import App from './components/App/App';

// reducer for storing information from the database
const favoritesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FAVORITES':
            return action.payload;
        default:
            return state;
    }
}

// reducer for storing the category from the database
const categoryReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            return action.payload;
        default:
            return state;
    }
}

const searchResultsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_RESULTS':
            return action.payload;
        default:
            return state;
    }
}

// THE saga functions
function* getFavorites() {
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/favorite'
        });
        yield put({
            type: 'ADD_FAVORITES',
            payload: response.data
        })
    } catch (err) {
        console.error('in getFavorites error', err);
    }
}

function* getCategories() {
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/category'
        }); console.log(response.data);
        yield put({
            type: 'ADD_CATEGORY',
            payload: response.data
        })
    } catch (err) {
        console.error(err);
    }
}


function* getSearch(action) {
    console.log('action', action.payload);
   
    try {
        const response = yield axios({
            method: 'GET',
            url: `/search/${action.payload}`
        });
        yield put({
            type: 'SET_RESULTS',
            payload: response.data
        })
    } catch (err) {
        console.error(err);
    }
}

function* newFavorites(action) {
    console.log('In newFavorites Saga', action.payload);
    
    try {
        const response = yield axios({
            method: 'POST',
            url: '/api/favorite',
            data: action.payload
        });
        yield put({
            type: 'SET_FAVORITES'
        })
    } catch (err) {
        console.error(err);
    }
}

function* updateFavorites(action) {
    try {
        const response = yield axios({
            method: 'PUT',
            url: '/api/favorite',
            data: action.payload
        });
        yield put({
            type: 'ADD_FAVORITES',
            payload: response.data
        })
    } catch (err) {
        console.error('updateFavorites error', err);
    }
}

// our watcher saga that takes care of the requests coming in
function* watcherSaga() {
    yield takeEvery('SET_FAVORITES', getFavorites);
    yield takeEvery('SET_CATEGORY', getCategories);
    yield takeEvery('NEW_FAVORITES', newFavorites);
    yield takeEvery('UPDATE_FAVORITES', updateFavorites);
    yield takeEvery('SEARCH_GIPHY', getSearch);
}

// combines the reducers into one store
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        favoritesReducer,
        categoryReducer,
        searchResultsReducer
    }),
    applyMiddleware(logger, sagaMiddleware)
);

// passes the watcherSaga into the sagaMiddleware
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
