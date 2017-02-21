import React from 'react';
import isboolean from 'lodash.isboolean';
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
    if (isboolean(this.props.primarykeys)) {
      return false;
    }
    return (
      <LocalesTable facade={this.context.facade}
        values={this.props.values}
        primarykeys={this.props.primarykeys} />
    );
  }

  _renderCreateForm () {
    if (!isboolean(this.props.primarykeys)) {
      return false;
    }
    return (
      <div style={{
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <button onClick={e => this._onClickImportButtonHandler(e)}
          style={{
            fontSize: '0.8em',
            textAlign: 'center',
            padding: '20px 35px',
            background: '#661E75'
          }}>
          <span>Create or import a new language set</span>
        </button>
      </div>
    );
  }

  /* ------------------------------------------------

   Render

  ------------------------------------------------ */

  render () {
    const classes = isboolean(this.props.primarykeys)
      ? 'flex-centered'
      : 'flex-start';
    return (
      <div className={`application-screen flex-rows ${classes}`}
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
  theme: React.PropTypes.object,
  facade: React.PropTypes.object
};

ApplicationContent.defaultProps = {
  values: {},
  primarykeys: false
};

ApplicationContent.propTypes = {
  values: React.PropTypes.array,
  primarykeys: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.array
  ])
};

export default ApplicationContent;
