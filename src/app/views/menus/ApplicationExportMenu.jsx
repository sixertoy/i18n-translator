import React from 'react';

class ApplicationExportMenu extends React.PureComponent {
  /* ------------------------------------------------

   Statics

  ------------------------------------------------ */

  /* ------------------------------------------------

   React Lifecycle

  ------------------------------------------------ */

  constructor(props) {
    super(props);
    this.state = {
      current: null,
    };
    this._component = null;
    this._ismounted = false;
    this._initialized = false;
  }

  componentWillMount() {}

  componentDidMount() {
    this._ismounted = true;
  }

  /* ------------------------------------------------

   Privates

  ------------------------------------------------ */

  _onLocaleTabClick(e, index) {
    e.preventDefault();
    if (index === this.props.selectexport) {
      return;
    }
    const action = this.context.facade.getAction('ApplicationAction');
    action.selectExport(index);
  }

  _onDiffButtonClick(e) {
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

  render() {
    return (
      <div
        className="screen-locales-tabs flex-columns"
        style={{
          padding: '12px 0 0 0',
          textAlign: 'right',
        }}>
        {this.props.langs.map((val, index) => (
          <button
            key={`tabs_${val}`}
            style={{
              background:
                this.props.selectexport === index ? '#FFFFFF' : 'transparent',
              color: this.props.selectexport === index ? '#338596' : '#ABABAB',
              marginRight: '3px',
              minWidth: '100px',
              paddingBottom: '24px',
              paddingTop: '7px',
              textAlign: 'center',
            }}
            onClick={e => this._onLocaleTabClick(e, index)}>
            <span>{val}</span>
          </button>
        ))}
        <button
          style={{
            background: this.props.selectexport < 0 ? '#FFFFFF' : 'transparent',
            color: this.props.selectexport < 0 ? '#338596' : '#ABABAB',
            marginRight: '3px',
            minWidth: '100px',
            paddingBottom: '24px',
            paddingTop: '7px',
            textAlign: 'center',
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
  selectexport: React.PropTypes.number.isRequired,
};

ApplicationExportMenu.contextTypes = {
  facade: React.PropTypes.object,
  theme: React.PropTypes.object,
};

export default ApplicationExportMenu;
