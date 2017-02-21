import React from 'react';
import isempty from 'lodash.isempty';
import isstring from 'lodash.isstring';
// punkbeer
import logo from './../../assets/json_logo.svg';
import GithubStarButton from './../../core/views/GithubStarButton';

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
    return true;
  }

  /* --------------------------------------------------------

   Renders Sub Components

  -------------------------------------------------------- */

  _renderCreateNewLanguage () {
    return (
      <span>
        <input type="text"
          style={{
            width: '240px',
            marginRight: '3px'
          }}
          ref={(c) => { this._newlangInput = c; }}
          placeholder="Create new language" />
        <button onClick={e => this._createNewLanguage(e)} >
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
        {this._renderCreateNewLanguage()}
      </div>
    );
  }

}

ApplicationMenu.contextTypes = {
  theme: React.PropTypes.object,
  facade: React.PropTypes.object
};

export default ApplicationMenu;
