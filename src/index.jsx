import './index.css';

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';

// import Application from './components/application';
// import getRouterHistory from './core/history';
// import { configure } from './core/store';
// import { getInitialState } from './redux/initial-state';

// const history = getRouterHistory();
// const initialState = getInitialState(history);
// const { persistor, store } = configure(history, initialState);

const Root = () => (
  // <StrictMode>
  //   <Provider store={store}>
  //     <PersistGate loading={null} persistor={persistor}>
  //       <BrowserRouter>
  <div>Hello World</div>
  //       </BrowserRouter>
  //     </PersistGate>
  //   </Provider>
  // </StrictMode>
);

ReactDOM.render(<Root />, document.getElementById('root'));
