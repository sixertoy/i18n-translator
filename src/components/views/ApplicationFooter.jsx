import React from 'react';

class ApplicationFooter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* --------------------------------------------------------

   Privates

  -------------------------------------------------------- */

  /* --------------------------------------------------------

   Renders Sub Components

  -------------------------------------------------------- */

  render() {
    return (
      <div
        className="application-footer flex-columns flex-space-between shadow-top"
        style={{
          background: this.context.theme.greylight,
          height: '20px',
          padding: '0 32px 0 32px',
          width: '100%',
        }}>
        <span
          style={{
            color: '#A0A0A0',
            fontFamily: 'arial',
            fontSize: '0.55em',
            letterSpacing: '0.12em',
            lineHeight: '2.8em',
            textTransform: 'uppercase',
          }}>
          <span
            style={{
              marginRight: '12px',
            }}>{`v${this.props.version}`}</span>
          <span
            style={{
              marginRight: '3px',
            }}>
            Made with{' '}
            <span
              style={{
                color: this.context.theme.love,
              }}>
              ♥
            </span>{' '}
            and React
          </span>
        </span>
      </div>
    );
  }
}

ApplicationFooter.contextTypes = {
  facade: React.PropTypes.object,
  theme: React.PropTypes.object,
};

ApplicationFooter.propTypes = {
  version: React.PropTypes.string.isRequired,
};

export default ApplicationFooter;
