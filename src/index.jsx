import './index.scss';

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { version } from '../package.json';
import Application from './components/application';
import getRouterHistory from './core/history';
import { getInitialState } from './redux/initial-state';
import { configure } from './redux/store';

const history = getRouterHistory();
const initialState = getInitialState(history);
const { persistor, store } = configure(history, initialState);

const { PUBLIC_URL } = process.env;

const Root = () => (
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename={PUBLIC_URL}>
          {/* eslint-disable-next-line */}
          {console.log('version : ', version)}
          <Application />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);

ReactDOM.render(<Root />, document.getElementById('root'));
