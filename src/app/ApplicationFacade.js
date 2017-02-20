import React from 'react';
import ReactDOM from 'react-dom';
// import packages CSS
import 'react-select/dist/react-select.css';
// core
import stores from './stores';
import actions from './actions';
import services from './services';
import observers from './observers';
import routesActions from './routes';
import { AbstractFacade } from '../core/abstracts';
import ApplicationLayout from './views/ApplicationLayout';

class ApplicationFacade extends AbstractFacade {

  start ({ name, version }) {
    this._beforeStart({
      services,
      stores,
      actions,
      routesActions,
      observers
    });
    // eslint-disable-next-line
    ReactDOM.render(<ApplicationLayout appname={name}
      version={version}
      facade={this} />, document.getElementById('root'));
  }

}

export default ApplicationFacade;
