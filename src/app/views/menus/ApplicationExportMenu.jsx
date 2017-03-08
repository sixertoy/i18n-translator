/* @flow */
import React from 'react';
// project

class ApplicationExportMenu extends React.PureComponent {

  /* ------------------------------------------------

   Statics

  ------------------------------------------------ */

  /* ------------------------------------------------

   React Lifecycle

  ------------------------------------------------ */

  constructor (props) {
    super(props);
    this.state = {
      current: null
    };
    this._component = null;
    this._ismounted = false;
    this._initialized = false;
  }

  componentWillMount () {}

  componentDidMount () {
    this._ismounted = true;
  }

  /* ------------------------------------------------

   Privates

  ------------------------------------------------ */

  _onLocaleTabClick (e, index) {
    e.preventDefault();
    if (index === this.props.selectexport) {
      return;
    }
    const action = this.context.facade.getAction('ApplicationAction');
    action.selectExport(index);
  }

  _onDiffButtonClick (e) {
    e.preventDefault();
    const action = this.context.facade.getAction('ApplicationAction');
    action.selectExport(-1);
  }

  /* ------------------------------------------------

   Sub Components Render

  ------------------------------------------------ */

  /* ------------------------------------------------

   Render

  ------------------------------------------------ */

  render () {
    return (
      <div className="screen-locales-tabs flex-columns"
        style={{
          textAlign: 'right',
          padding: '12px 0 0 0'
        }}>
        {this.props.langs
          .map((val, index) => <button key={`tabs_${val}`}
            style={{
              minWidth: '100px',
              paddingTop: '7px',
              marginRight: '3px',
              textAlign: 'center',
              paddingBottom: '24px',
              color: (this.props.selectexport === index) ? '#338596' : '#ABABAB',
              background: (this.props.selectexport === index) ? '#FFFFFF' : 'transparent'
            }}
            onClick={e => this._onLocaleTabClick(e, index)} >
            <span>{val}</span>
          </button>)}
        <button style={{
          minWidth: '100px',
          paddingTop: '7px',
          marginRight: '3px',
          textAlign: 'center',
          paddingBottom: '24px',
          color: (this.props.selectexport < 0) ? '#338596' : '#ABABAB',
          background: (this.props.selectexport < 0) ? '#FFFFFF' : 'transparent'
        }}
          onClick={e => this._onDiffButtonClick(e)}>
          <span>{'< diff >'}</span>
        </button>
      </div>
    );
  }

}

ApplicationExportMenu.propTypes = {
  langs: React.PropTypes.array.isRequired,
  selectexport: React.PropTypes.number.isRequired
};

ApplicationExportMenu.contextTypes = {
  theme: React.PropTypes.object,
  facade: React.PropTypes.object
};

export default ApplicationExportMenu;
