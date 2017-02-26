import React from 'react';
// application
import Constants from './../../constants';

class ConnectScreen extends React.PureComponent {

  /* ------------------------------------------------

   Privates

  ------------------------------------------------ */

  _onClickImportButtonHandler (evt) {
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

  render () {
    return (
      <div style={{
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <button onClick={e => this._onClickImportButtonHandler(e)}
          style={{
            fontSize: '0.8em',
            textAlign: 'center',
            padding: '20px 35px',
            background: '#661E75'
          }}>
          <span>Create or import a new language set</span>
        </button>
      </div>
    );
  }

}

ConnectScreen.contextTypes = {
  theme: React.PropTypes.object,
  facade: React.PropTypes.object
};

export default ConnectScreen;
