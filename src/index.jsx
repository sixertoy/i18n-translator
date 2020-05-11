import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import 'tippy.js/animations/shift-away-subtle.css';
import './scss/index.scss';
import 'firebase/auth';

import { FirebaseAuthProvider } from '@react-firebase/auth';
import firebase from 'firebase/app';
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
import { getFirebaseConfig } from './core/utils';
import { getInitialState } from './redux/initial-state';
import { configure } from './redux/store';

const { PUBLIC_URL } = process.env;
const history = getRouterHistory();
const firebaseConfig = getFirebaseConfig();
const initialState = getInitialState(history);
const { persistor, store } = configure(history, initialState);
const globalIconStyle = { display: 'inline-flex', verticalAlign: 'middle' };

const Root = () => (
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
          <BrowserRouter basename={PUBLIC_URL}>
            <ThemeProvider theme={store.getState().theme}>
              {/* eslint-disable-next-line */}
              {console.log('version : ', version)}
              <IconContext.Provider value={{ style: globalIconStyle }}>
                <Application />
              </IconContext.Provider>
            </ThemeProvider>
          </BrowserRouter>
        </FirebaseAuthProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);

ReactDOM.render(<Root />, document.getElementById('root'));
