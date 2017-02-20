import React from 'react';
// project
import Constants from './../constants';
import SubmitButton from './buttons/SubmitButton';

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
    const ApplicationAction = this.context.facade.getAction('ApplicationAction');
    ApplicationAction.togglePopin('export');
    ApplicationAction.saveLocales();
  }

  /* --------------------------------------------------------

   Renders Sub Components

  -------------------------------------------------------- */

  _renderSaveButtons () {
    if (!this.props.canexport) {
      return Constants.REACT.NO_RENDER;
    }
    return (
      <span>
        <SubmitButton label={'Export All Languages'}
          clickHandler={e => this._showTranslationsContent(e)}
          styles={{
            marginRight: '12px',
            background: this.context.theme.velvet
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
        }}>Made with <span style={{
          color: this.context.theme.love
        }}>♥</span> and React</span>
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
          padding: '10px 32px 10px 32px',
          background: this.context.theme.metal
        }}>
        {this._renderCredits()}
        {this._renderSaveButtons()}
      </div>
    );
  }

}

ApplicationFooter.contextTypes = {
  theme: React.PropTypes.object,
  facade: React.PropTypes.object
};

ApplicationFooter.propTypes = {
  version: React.PropTypes.string.isRequired,
  canexport: React.PropTypes.bool.isRequired
};

export default ApplicationFooter;
