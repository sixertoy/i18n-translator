import React from 'react';

import Constants from '../../constants';

class ConnectScreen extends React.PureComponent {
  /* ------------------------------------------------

   Privates

  ------------------------------------------------ */

  _onClickImportButtonHandler(evt) {
    evt.preventDefault();
    const action = this.context.facade.getAction('ApplicationAction');
    action.toggleScreen(Constants.SCREENS.IMPORT);
  }

  /* ------------------------------------------------

   Sub Components Render

  ------------------------------------------------ */

  /* ------------------------------------------------

   Render

  ------------------------------------------------ */

  render() {
    return (
      <div
        style={{
          margin: '0 auto',
          textAlign: 'center',
        }}>
        <button
          style={{
            background: '#661E75',
            fontSize: '0.8em',
            padding: '20px 35px',
            textAlign: 'center',
          }}
          onClick={e => this._onClickImportButtonHandler(e)}>
          <span>Create or import a new language set</span>
        </button>
      </div>
    );
  }
}

ConnectScreen.contextTypes = {
  facade: React.PropTypes.object,
  theme: React.PropTypes.object,
};

export default ConnectScreen;
