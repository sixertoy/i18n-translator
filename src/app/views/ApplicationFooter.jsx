import React from 'react';
import isempty from 'lodash.isempty';
import isstring from 'lodash.isstring';
// punkbeer

class ApplicationFooter extends React.PureComponent {

  constructor (props) {
    super(props);
    this.state = {};
  }

  /* --------------------------------------------------------

   Privates

  -------------------------------------------------------- */

  _saveTranslations (evt) {
    evt.preventDefault();
    const ApplicationAction = this.props.facade.getAction('ApplicationAction');
    ApplicationAction.saveLanguages();
  }

  _saveTranslationsDiff (evt) {
    evt.preventDefault();
    const ApplicationAction = this.props.facade.getAction('ApplicationAction');
    ApplicationAction.saveLanguagesDiff();
  }

  /* --------------------------------------------------------

   Renders Sub Components

  -------------------------------------------------------- */

  _renderSaveButtons () {
    return (
      <span>
        <button onClick={e => this._saveTranslations(e)}
          style={{
            padding: '7px',
            marginRight: '12px'
          }}>
          <span>Save (admin)</span>
        </button>
        <button onClick={e => this._saveTranslationsDiff(e)}
          style={{
            padding: '7px',
            color: 'white',
            marginRight: '12px',
            background: '#00FF00'
          }}>
          <span>Save diff</span>
        </button>
      </span>
    );
  }

  render () {
    return (
      <div className="application-footer flex-columns"
        style={{
          width: '100%',
          height: '50px',
          minHeight: '50px',
          padding: '10px 32px',
          background: '#1D1F21'
        }}>
        {this._renderSaveButtons()}
      </div>
    );
  }

}

ApplicationFooter.propTypes = {
  langs: React.PropTypes.array.isRequired,
  facade: React.PropTypes.object.isRequired
};

export default ApplicationFooter;
