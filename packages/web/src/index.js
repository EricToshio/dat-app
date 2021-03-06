import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import gameState from './store/reducers';
import 'typeface-roboto';
import './index.css';
import Hero from './pages/Hero';
// import * as serviceWorker from './serviceWorker';

const store = createStore(gameState)

ReactDOM.render(
    <Provider store={store}>
        <Hero />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();