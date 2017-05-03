import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './app';
import About from './about';
import Track from './track';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history }>
            <Route path="/" component={App}/>
            <Route path="/about" component={About}/>
            <Route path="/tracks/:id" component={Track}/>
        </Router>
    </Provider>,
    document.getElementById('app')
);
