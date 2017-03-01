import React from 'react';
// project

class ApplicationFooter extends React.PureComponent {

  constructor (props) {
    super(props);
    this.state = {};
  }

  /* --------------------------------------------------------

   Privates

  -------------------------------------------------------- */

  /* --------------------------------------------------------

   Renders Sub Components

  -------------------------------------------------------- */

  render () {
    return (
      <div className="application-footer flex-columns flex-space-between shadow-top"
        style={{
          width: '100%',
          height: '20px',
          padding: '0 32px 0 32px',
          background: this.context.theme.greylight
        }}>
        <span style={{
          color: '#A0A0A0',
          fontSize: '0.55em',
          lineHeight: '2.8em',
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
      </div>
    );
  }

}

ApplicationFooter.contextTypes = {
  theme: React.PropTypes.object,
  facade: React.PropTypes.object
};

ApplicationFooter.propTypes = {
  version: React.PropTypes.string.isRequired
};

export default ApplicationFooter;
