require('es6-promise').polyfill()

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './redux/configureStore';
import routes from './routes/index';

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store)

const App = () => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
)

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
