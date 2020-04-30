import React from 'react';
import ReactDOM from 'react-dom';

// core
import { AbstractFacade } from '../core/abstracts';
import actions from './actions';
import ApplicationLayout from './ApplicationLayout';
import observers from './observers';
import routesActions from './routes';
import services from './services';
import stores from './stores';

class ApplicationFacade extends AbstractFacade {
  start({ name, version }) {
    this._beforeStart({
      actions,
      observers,
      routesActions,
      services,
      stores,
    });
    // eslint-disable-next-line
    ReactDOM.render(
      <ApplicationLayout appname={name} facade={this} version={version} />,
      document.getElementById('root')
    );
  }
}

export default ApplicationFacade;
