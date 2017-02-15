import React from 'react';
import isempty from 'lodash.isempty';
// project
import LocalesTable from './locales-table/LocalesTable';

class ApplicationContent extends React.PureComponent {

  constructor (props) {
    super(props);
    this.state = {};
    this._initialized = false;
  }

  /* ------------------------------------------------

   Privates

  ------------------------------------------------ */

  _onClickImportButtonHandler (evt) {
    evt.preventDefault();
    const action = this.context.facade.getAction('ApplicationAction');
    action.togglePopin('import');
  }

  /* ------------------------------------------------

   Sub Components Render

  ------------------------------------------------ */

  _renderLocalesTable () {
    if (isempty(this.props.primarykeys)) {
      return false;
    }
    return (
      <LocalesTable facade={this.context.facade}
        locales={this.props.locales}
        primarykeys={this.props.primarykeys} />
    );
  }

  _renderCreateForm () {
    if (!isempty(this.props.primarykeys)) {
      return false;
    }
    return (
      <div style={{
        textAlign: 'center'
      }}>
        <button onClick={e => this._onClickImportButtonHandler(e)}
          style={{
            fontSize: '0.8em',
            textAlign: 'center',
            padding: '20px 35px'
          }}>
          <span>Create or import a new description file</span>
        </button>
      </div>
    );
  }

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
          position: 'relative',
          background: '#EEEEEE'
        }}>
        {this._renderCreateForm()}
        {this._renderLocalesTable()}
      </div>
    );
  }
}

ApplicationContent.contextTypes = {
  facade: React.PropTypes.object
};

ApplicationContent.defaultProps = {
  locales: {},
  primarykeys: {}
};

ApplicationContent.propTypes = {
  locales: React.PropTypes.object,
  primarykeys: React.PropTypes.object
};

export default ApplicationContent;
