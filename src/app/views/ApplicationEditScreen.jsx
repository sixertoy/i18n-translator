import React from 'react';
// project
import LocalesTable from './locales-table/LocalesTable';

class ApplicationEditScreen extends React.PureComponent {

  constructor (props) {
    super(props);
    this.state = {};
    this._initialized = false;
  }

  /* ------------------------------------------------

   Privates

  ------------------------------------------------ */

  /* ------------------------------------------------

   Sub Components Render

  ------------------------------------------------ */

  /* ------------------------------------------------

   Render

  ------------------------------------------------ */

  render () {
    return (
      <div className="application-screen"
        style={{
          width: '100%',
          fontSize: '1.2em',
          overflowX: 'hidden',
          overflowY: 'scroll',
          background: '#EEEEEE'
        }}>
        <LocalesTable facade={this.props.facade}
          locales={this.props.locales}
          primarykeys={this.props.primarykeys} />
      </div>
    );
  }

}

ApplicationEditScreen.defaultProps = {
  locales: {},
  primarykeys: {}
};

ApplicationEditScreen.propTypes = {
  locales: React.PropTypes.object,
  primarykeys: React.PropTypes.object,
  facade: React.PropTypes.object.isRequired
};

export default ApplicationEditScreen;
