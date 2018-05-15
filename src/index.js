import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import BuscaPontos from '../src/pages/buscaPontos'
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore, combineReducers } from 'redux'
import buscaPontoReducer from './reducers/buscaPontosReducers'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import '../src/theme/index.css';
import '../src/theme/App.css'
import 'antd/dist/antd.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

const reducers = combineReducers({
    buscaPonto: buscaPontoReducer
})

const middlewares = [
    multi,
    promise,
    thunk,
]

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(...middlewares)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <BuscaPontos />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
