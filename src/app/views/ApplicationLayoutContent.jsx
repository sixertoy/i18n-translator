import React from 'react';
import isempty from 'lodash.isempty';
// project
import LocalesTable from './locales-table/LocalesTable';

class ApplicationLayoutContent extends React.PureComponent {

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
    action.toggleScreen('import');
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
        langs={this.props.langs}
        values={this.props.values}
        primarykeys={this.props.primarykeys} />
    );
  }

  _renderCreateForm () {
    if (!isempty(this.props.primarykeys)) {
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
    const classes = isempty(this.props.primarykeys)
      ? 'flex-centered'
      : 'flex-start';
    return (
      <div className={`application-layout-content flex-grow-and-shrink flex-rows ${classes}`}
        style={{
          width: '100%',
          fontSize: '1.2em',
          paddingTop: '20px',
          overflowX: 'hidden',
          overflowY: 'scroll',
          position: 'relative',
          background: '#EEEEEE',
          paddingBottom: '20px'
        }}>
        {this._renderCreateForm()}
        {this._renderLocalesTable()}
      </div>
    );
  }
}

ApplicationLayoutContent.contextTypes = {
  theme: React.PropTypes.object,
  facade: React.PropTypes.object
};

ApplicationLayoutContent.defaultProps = {
  langs: [],
  values: {},
  primarykeys: []
};

ApplicationLayoutContent.propTypes = {
  langs: React.PropTypes.array,
  values: React.PropTypes.array,
  primarykeys: React.PropTypes.array
};

export default ApplicationLayoutContent;
