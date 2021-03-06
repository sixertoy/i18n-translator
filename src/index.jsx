import 'firebase/auth';
import 'firebase/database';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/dist/svg-arrow.css';
import 'tippy.js/animations/shift-away-subtle.css';
import 'react-toastify/dist/ReactToastify.css';
import './scss/index.scss';

import firebase from 'firebase/app';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { IconContext } from 'react-icons';
import { ThemeProvider } from 'react-jss';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { cssTransition, ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import { version } from '../package.json';
import Application from './components/application';
import { FIREBASE_AUTH_LOCAL } from './constants';
import { FirebaseAuthProvider } from './core/firebase';
import getRouterHistory from './core/history';
import { getInitialState } from './redux/initial-state';
import { configure } from './redux/store';
import { getThemeByKey } from './theme';

const { PUBLIC_URL } = process.env;
const history = getRouterHistory();
const initialState = getInitialState(history);
const { persistor, store } = configure(history, initialState);
const globalIconStyle = { display: 'inline-flex', verticalAlign: 'middle' };

const ToastTransition = cssTransition({
  enter: `Toastify__custom-flip-enter`,
  exit: `Toastify__custom-flip-exit`,
});

const Root = () => (
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FirebaseAuthProvider
          firebase={firebase}
          persistence={FIREBASE_AUTH_LOCAL}>
          <BrowserRouter basename={PUBLIC_URL}>
            <ThemeProvider theme={getThemeByKey(store.getState().theme)}>
              {/* eslint-disable-next-line */}
              {console.log('version : ', version)}
              <IconContext.Provider value={{ style: globalIconStyle }}>
                <Application />
                <ToastContainer
                  hideProgressBar
                  newestOnTop
                  pauseOnHover
                  autoClose={3500}
                  closeOnClick={false}
                  draggable={false}
                  pauseOnVisibilityChange={false}
                  position="top-right"
                  rtl={false}
                  transition={ToastTransition}
                />
              </IconContext.Provider>
            </ThemeProvider>
          </BrowserRouter>
        </FirebaseAuthProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);

ReactDOM.render(<Root />, document.getElementById('root'));
