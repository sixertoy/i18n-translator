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

  _addNewLanguageClickHandler (evt) {
    evt.preventDefault();
    const ApplicationAction = this.context.facade.getAction('ApplicationAction');
    ApplicationAction.toggleScreen(Constants.SCREENS.IMPORT);
  }

  _onExportClickHandler (evt) {
    evt.preventDefault();
    const ApplicationAction = this.context.facade.getAction('ApplicationAction');
    ApplicationAction.exportDiffChanges();
    ApplicationAction.toggleScreen(Constants.SCREENS.EXPORT);
  }

  _showEditTableClickHandler (evt) {
    evt.preventDefault();
    const ApplicationAction = this.context.facade.getAction('ApplicationAction');
    ApplicationAction.exportDiffChanges();
    ApplicationAction.toggleScreen(Constants.SCREENS.EDIT);
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

  _renderAddNewLanguageButton () {
    if (!this.props.canadd) {
      return Constants.REACT.NO_RENDER;
    }
    return (
      <span style={{
        marginRight: '20px'
      }}>
        <button onClick={e => this._addNewLanguageClickHandler(e)} >
          <span>Add a Language</span>
        </button>
      </span>
    );
  }

  _renderShowEditTableButton () {
    return (
      <span style={{
        marginRight: '20px'
      }}>
        <button onClick={e => this._showEditTableClickHandler(e)} >
          <span>Show table</span>
        </button>
      </span>
    );
  }

  render () {
    return (
      <div className="application-main-menu flex-no-grow-no-shrink flex-columns flex-space-between"
        style={{
          width: '100%',
          minHeight: '55px',
          padding: '12px 32px',
          background: '#FBFBFB'
        }}>
        <div />
        <div>
          {this._renderShowEditTableButton()}
          {this._renderAddNewLanguageButton()}
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
