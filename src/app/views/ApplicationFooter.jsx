import React from 'react';
// project
import ApplicationButton from './buttons/ApplicationButton';

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
        <ApplicationButton label={'Export All Languages'}
          clickHandler={e => this._showTranslationsContent(e)}
          styles={{
            marginRight: '12px'
          }} />
      </span>
    );
  }

  _renderCredits () {
    return (
      <span style={{
        color: '#A0A0A0',
        fontSize: '0.55em',
        lineHeight: '40px',
        fontFamily: 'arial',
        letterSpacing: '0.12em',
        textTransform: 'uppercase'
      }}>
        <span style={{
          marginRight: '12px'
        }}>{`v${this.props.version}`}</span>
        <span style={{
          marginRight: '3px'
        }}>Made with <span style={{ color: '#DD4739' }}>♥</span> and React</span>
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
          background: '#34495E',
          padding: '10px 32px 10px 32px'
        }}>
        {this._renderCredits()}
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
