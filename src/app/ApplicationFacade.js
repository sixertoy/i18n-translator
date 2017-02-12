import React from 'react';
import ReactDOM from 'react-dom';
// core
import { AbstractFacade } from '../core/abstracts';
// app
import stores from './stores';
import actions from './actions';
import services from './services';
import observers from './observers';
import routesActions from './routes';
import Application from './views/Application';
// datas
import locales from './../data/locales';
import tablekeys from './../data/table-keys.json';

class ApplicationFacade extends AbstractFacade {

  start (version) {
    this._beforeStart({
      services,
      stores,
      actions,
      routesActions,
      observers
    });
    // eslint-disable-next-line
    ReactDOM.render(<Application version={version}
      facade={this} />, document.getElementById('root'));
    // first application action
    // load languages files and locales keys
    const action = this.getAction('ApplicationAction');
    action.initializeStore(locales, tablekeys);
  }

}

export default ApplicationFacade;
