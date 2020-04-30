import React from 'react';

import Constants from '../constants';
import SubmitButton from './buttons/SubmitButton';
import ApplicationExportMenu from './menus/ApplicationExportMenu';

class ApplicationMenu extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* --------------------------------------------------------

   Privates

  -------------------------------------------------------- */

  _addNewLanguageClickHandler(evt) {
    evt.preventDefault();
    const ApplicationAction = this.context.facade.getAction(
      'ApplicationAction'
    );
    ApplicationAction.toggleScreen(Constants.SCREENS.IMPORT);
  }

  _onExportClickHandler(evt) {
    evt.preventDefault();
    const ApplicationAction = this.context.facade.getAction(
      'ApplicationAction'
    );
    ApplicationAction.exportDiffChanges();
    ApplicationAction.toggleScreen(Constants.SCREENS.EXPORT);
  }

  _showEditTableClickHandler(evt) {
    evt.preventDefault();
    const ApplicationAction = this.context.facade.getAction(
      'ApplicationAction'
    );
    ApplicationAction.exportDiffChanges();
    ApplicationAction.toggleScreen(Constants.SCREENS.EDIT);
  }

  /* --------------------------------------------------------

   Renders Sub Components

  -------------------------------------------------------- */

  _renderExportMenu() {
    if (!this.props.isexport) {
      return false;
    }
    return (
      <ApplicationExportMenu
        langs={this.props.langs}
        selectexport={this.props.selectexport}
      />
    );
  }

  _renderExportButton() {
    if (!this.props.canexport) {
      return Constants.REACT.NO_RENDER;
    }
    return (
      <SubmitButton
        clickHandler={e => this._onExportClickHandler(e)}
        iconclass="icon-download"
        label="Export"
        styles={{
          background: this.context.theme.velvet,
        }}
      />
    );
  }

  _renderAddNewLanguageButton() {
    if (!this.props.canadd) {
      return Constants.REACT.NO_RENDER;
    }
    return (
      <span
        style={{
          marginRight: '20px',
        }}>
        <button onClick={e => this._addNewLanguageClickHandler(e)}>
          <span>Add a Language</span>
        </button>
      </span>
    );
  }

  _renderShowEditTableButton() {
    if (!this.props.canshow) {
      return Constants.REACT.NO_RENDER;
    }
    return (
      <span
        style={{
          marginRight: '20px',
        }}>
        <button onClick={e => this._showEditTableClickHandler(e)}>
          <span>Show table</span>
        </button>
      </span>
    );
  }

  render() {
    return (
      <div
        className="application-main-menu flex-no-grow-no-shrink flex-columns flex-space-between"
        style={{
          background: '#FBFBFB',
          minHeight: '55px',
          padding: '0 32px',
          width: '100%',
        }}>
        <div
          style={{
            padding: '12px 0',
          }}>
          {this._renderShowEditTableButton()}
          {this._renderAddNewLanguageButton()}
          {this._renderExportButton()}
        </div>
        {this._renderExportMenu()}
      </div>
    );
  }
}

ApplicationMenu.propTypes = {
  canadd: React.PropTypes.bool.isRequired,
  canexport: React.PropTypes.bool.isRequired,
  canshow: React.PropTypes.bool.isRequired,
  isexport: React.PropTypes.bool.isRequired,
  langs: React.PropTypes.array.isRequired,
  selectexport: React.PropTypes.number.isRequired,
};

ApplicationMenu.contextTypes = {
  facade: React.PropTypes.object,
  theme: React.PropTypes.object,
};

export default ApplicationMenu;
