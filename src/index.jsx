// import 'react-tippy/dist/tippy.css';
import 'tippy.js/dist/tippy.css';
import './scss/index.scss';

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { IconContext } from 'react-icons';
import { ThemeProvider } from 'react-jss';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { version } from '../package.json';
import Application from './components/application';
import getRouterHistory from './core/history';
import { getInitialState } from './initial-state';
import { configure } from './redux/store';

const { PUBLIC_URL } = process.env;
const history = getRouterHistory();
const initialState = getInitialState(history);
const { persistor, store } = configure(history, initialState);

const globalIconStyle = { display: 'inline-flex', verticalAlign: 'middle' };

const Root = () => (
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename={PUBLIC_URL}>
          <ThemeProvider theme={store.getState().theme}>
            {/* eslint-disable-next-line */}
            {console.log('version : ', version)}
            <IconContext.Provider value={{ style: globalIconStyle }}>
              <Application />
            </IconContext.Provider>
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);

ReactDOM.render(<Root />, document.getElementById('root'));
