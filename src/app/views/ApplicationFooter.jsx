import React from 'react';

class ApplicationFooter extends React.PureComponent {

  constructor (props) {
    super(props);
    this.state = {};
  }

  /* --------------------------------------------------------

   Privates

  -------------------------------------------------------- */

  _showTranslationsContent (evt, savediff) {
    evt.preventDefault();
    const ApplicationAction = this.props.facade.getAction('ApplicationAction');
    ApplicationAction.togglePopin();
    ApplicationAction.saveLocales(savediff);
  }

  /* --------------------------------------------------------

   Renders Sub Components

  -------------------------------------------------------- */

  _renderSaveButtons () {
    return (
      <span>
        <button onClick={e => this._showTranslationsContent(e, false)}
          style={{
            marginRight: '12px'
          }}>
          <span>
            <i className="icon-download" />
            <span>Save (admin)</span>
          </span>
        </button>
        <button type="submit"
          onClick={e => this._showTranslationsContent(e, true)}
          style={{
            marginRight: '12px'
          }} >
          <span>
            <i className="icon-download" />
            <span>Save Diff</span>
          </span>
        </button>
      </span>
    );
  }

  render () {
    return (
      <div className="application-footer flex-columns flex-align-end shadow-top"
        style={{
          width: '100%',
          height: '50px',
          minHeight: '50px',
          background: '#1D1F21'
        }}>
        {this._renderSaveButtons()}
      </div>
    );
  }

}

ApplicationFooter.propTypes = {
  facade: React.PropTypes.object.isRequired
};

export default ApplicationFooter;
