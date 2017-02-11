import React from 'react';
import isempty from 'lodash.isempty';
import isstring from 'lodash.isstring';
// punkbeer

class ApplicationHeader extends React.PureComponent {

  constructor (props) {
    super(props);
    this.state = {};
  }

  /* --------------------------------------------------------

   Privates

  -------------------------------------------------------- */

  _searchFor (evt) {
    evt.preventDefault();
  }

  _createNewLanguage (evt) {
    evt.preventDefault();
    const key = this._newlangInput.value;
    if (!isstring(key) || isempty(key.trim()) || (this.props.langs.indexOf(key) >= 0)) {
      return false;
    }
    const ApplicationAction = this.props.facade.getAction('ApplicationAction');
    ApplicationAction.createNewLanguage(key);
    return true;
  }

  /* --------------------------------------------------------

   Renders Sub Components

  -------------------------------------------------------- */

  _renderSearchInput () {
    return (
      <span>
        <input type="text"
          style={{
            width: '240px',
            padding: '7px',
            marginRight: '3px',
            border: '1px solid #CCCCCC'
          }}
          placeholder="Search for..." />
        <button onClick={e => this._searchFor(e)}
          style={{
            padding: '7px',
            marginRight: '12px'
          }}>
          <span>Search</span>
        </button>
      </span>
    );
  }

  _renderCreateNewLanguage () {
    return (
      <span>
        <input type="text"
          style={{
            padding: '7px',
            marginRight: '3px',
            border: '1px solid #CCCCCC'
          }}
          ref={(c) => { this._newlangInput = c; }}
          placeholder="Create new language" />
        <button onClick={e => this._createNewLanguage(e)}
          style={{
            padding: '7px'
          }}>
          <span>Create</span>
        </button>
      </span>
    );
  }

  render () {
    return (
      <div className="application-header flex-columns"
        style={{
          width: '100%',
          height: '70px',
          minHeight: '70px',
          background: 'white',
          padding: '20px 32px'
        }}>
        {this._renderCreateNewLanguage()}
        {this._renderSearchInput()}
      </div>
    );
  }

}

ApplicationHeader.propTypes = {
  langs: React.PropTypes.array.isRequired,
  facade: React.PropTypes.object.isRequired
};

export default ApplicationHeader;
