import React from 'react';
// project
import Constants from './../constants';
import SubmitButton from './buttons/SubmitButton';

class ApplicationMenu extends React.PureComponent {

  constructor (props) {
    super(props);
    this.state = {};
  }

  /* --------------------------------------------------------

   Privates

  -------------------------------------------------------- */

  _createNewLanguage (evt) {
    evt.preventDefault();
    const ApplicationAction = this.context.facade.getAction('ApplicationAction');
    ApplicationAction.togglePopin('import');
  }

  _createNewPrimaryKey (evt) {
    evt.preventDefault();
    return true;
  }

  _onExportClickHandler (evt) {
    evt.preventDefault();
    const ApplicationAction = this.context.facade.getAction('ApplicationAction');
    ApplicationAction.togglePopin('export');
    ApplicationAction.saveLocales();
  }

  /* --------------------------------------------------------

   Renders Sub Components

  -------------------------------------------------------- */

  _renderExportButton () {
    if (!this.props.canexport) {
      return Constants.REACT.NO_RENDER;
    }
    return (
      <SubmitButton clickHandler={e => this._onExportClickHandler(e)}
        label={'Export'}
        iconclass={'icon-download'}
        styles={{
          background: this.context.theme.velvet
        }} />
    );
  }

  _renderCreateNewLanguage () {
    if (!this.props.canadd) {
      return Constants.REACT.NO_RENDER;
    }
    return (
      <span style={{
        marginRight: '20px'
      }}>
        <button onClick={e => this._createNewLanguage(e)} >
          <span>Add a Language</span>
        </button>
      </span>
    );
  }

  _renderCreateNewPrimaryKey () {
    if (!this.props.canadd) {
      return Constants.REACT.NO_RENDER;
    }
    return (
      <span>
        <input type="text"
          style={{
            width: '70px',
            marginRight: '3px'
          }}
          ref={(c) => { this._newlangInput = c; }}
          placeholder="primary" />
        <button onClick={e => this._createNewPrimaryKey(e)} >
          <span>Create</span>
        </button>
      </span>
    );
  }

  render () {
    return (
      <div className="application-main-menu flex-columns flex-space-between"
        style={{
          width: '100%',
          padding: '12px 32px',
          background: '#FBFBFB'
        }}>
        <div>
          {/* this._renderCreateNewPrimaryKey() */}
        </div>
        <div>
          {this._renderCreateNewLanguage()}
          {this._renderExportButton()}
        </div>
      </div>
    );
  }

}

ApplicationMenu.propTypes = {
  canadd: React.PropTypes.bool.isRequired,
  canexport: React.PropTypes.bool.isRequired
};

ApplicationMenu.contextTypes = {
  theme: React.PropTypes.object,
  facade: React.PropTypes.object
};

export default ApplicationMenu;
