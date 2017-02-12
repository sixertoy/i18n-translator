import React from 'react';
// project
import ExportButton from './buttons/ExportButton';

class ApplicationFooter extends React.PureComponent {

  constructor (props) {
    super(props);
    this.state = {};
  }

  /* --------------------------------------------------------

   Privates

  -------------------------------------------------------- */

  _showTranslationsContent (evt) {
    evt.preventDefault();
    const ApplicationAction = this.props.facade.getAction('ApplicationAction');
    ApplicationAction.togglePopin();
    ApplicationAction.saveLocales();
  }

  /* --------------------------------------------------------

   Renders Sub Components

  -------------------------------------------------------- */

  _renderSaveButtons () {
    return (
      <span>
        <ExportButton label={'Export All Languages'}
          clickHandler={e => this._showTranslationsContent(e)}
          styles={{
            marginRight: '12px'
          }} />
      </span>
    );
  }

  render () {
    return (
      <div className="application-footer flex-columns flex-space-between shadow-top"
        style={{
          width: '100%',
          height: '50px',
          minHeight: '50px',
          paddingTop: '10px',
          paddingBottom: '10px',
          background: '#1D1F21'
        }}>
        <span style={{
          color: '#323232',
          fontSize: '0.8em',
          lineHeight: '40px',
          fontFamily: 'arial',
          textTransform: 'uppercase'
        }}>
          <span style={{
            marginRight: '12px'
          }}>Made with <span style={{ color: '#DD4739' }}>♥</span> and React</span>
          <span style={{
            marginRight: '3px'
          }}>{`Version: ${this.props.version}`}</span>
        </span>
        {this._renderSaveButtons()}
      </div>
    );
  }

}

ApplicationFooter.propTypes = {
  version: React.PropTypes.string.isRequired,
  facade: React.PropTypes.object.isRequired
};

export default ApplicationFooter;
