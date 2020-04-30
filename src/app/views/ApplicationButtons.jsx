import React from 'react';

import Constants from '../constants';
import SubmitButton from './buttons/SubmitButton';

class ApplicationButton extends React.PureComponent {
  /* ------------------------------------------------

   React Lifecycle

  ------------------------------------------------ */

  constructor(props) {
    super(props);
    this.state = {};
    this._ismounted = false;
    this._initialized = false;
  }

  componentDidMount() {
    this._ismounted = true;
  }

  componentWillUnmount() {
    this._ismounted = false;
  }

  /* ------------------------------------------------

   Privates

  ------------------------------------------------ */

  _showTranslationsContent(evt) {
    evt.preventDefault();
    const ApplicationAction = this.context.facade.getAction(
      'ApplicationAction'
    );
    ApplicationAction.toggleScreen('export');
    ApplicationAction.saveLocales();
  }

  _addNewLanguage(evt) {
    evt.preventDefault();
    const ApplicationAction = this.context.facade.getAction(
      'ApplicationAction'
    );
    ApplicationAction.toggleScreen('import');
  }

  /* ------------------------------------------------

   Sub Components Render

  ------------------------------------------------ */

  _renderAddLanguageButton() {
    if (!this.props.canadd) {
      return Constants.REACT.NO_RENDER;
    }
    return (
      <SubmitButton
        clickHandler={e => this._addNewLanguage(e)}
        styles={{
          background: this.context.theme.velvet,
          height: '56px',
          width: '56px',
        }}
      />
    );
  }

  _renderExportButton() {
    if (!this.props.canexport) {
      return Constants.REACT.NO_RENDER;
    }
    return (
      <SubmitButton
        clickHandler={e => this._showTranslationsContent(e)}
        iconclass="icon-download"
        styles={{
          background: this.context.theme.grey,
          fontSize: '1.4em',
          height: '56px',
          width: '56px',
        }}
      />
    );
  }

  /* ------------------------------------------------

   Render

  ------------------------------------------------ */

  render() {
    return (
      <ul
        className="application-buttons"
        style={{
          bottom: '60px',
          position: 'absolute',
          right: '20px',
        }}>
        <li className="shadow-around">{this._renderAddLanguageButton()}</li>
        <li
          className="shadow-around"
          style={{
            marginTop: '7px',
          }}>
          {this._renderExportButton()}
        </li>
      </ul>
    );
  }
}

ApplicationButton.contextTypes = {
  facade: React.PropTypes.object.isRequired,
  theme: React.PropTypes.object.isRequired,
};

ApplicationButton.propTypes = {
  canadd: React.PropTypes.bool.isRequired,
  canexport: React.PropTypes.bool.isRequired,
};

export default ApplicationButton;
