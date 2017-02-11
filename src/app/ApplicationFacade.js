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

class ApplicationFacade extends AbstractFacade {

  start () {
    this._beforeStart({
      services,
      stores,
      actions,
      routesActions,
      observers
    });
    const store = this.getStore('ApplicationStore');
    ReactDOM.render(
      // eslint-disable-next-line
      <Application facade={this}
        translationkeys={store.getTranslationKeys()} />, document.getElementById('root'));
    const action = this.getAction('ApplicationAction');
    action.loadLanguages();
  }

}

export default ApplicationFacade;
