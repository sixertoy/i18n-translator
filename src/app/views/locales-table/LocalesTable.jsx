import React from 'react';
// project
import LocalesTableRow from './LocalesTableRow';

class LocalesTable extends React.PureComponent {

  /* ------------------------------------------------

   Statics

  ------------------------------------------------ */

  /* ------------------------------------------------

   React Lifecycle

  ------------------------------------------------ */

  constructor (props) {
    super(props);
    this.state = {};
    this._initialized = false;
  }

  componentDidUpdate () {
    if (!this._initialized) {
      // eslint-disable-next-line
      this._initialized = true;
      document.querySelectorAll('.autosize')
        // eslint-disable-next-line
        .forEach(elt => (elt.style.height = `${(elt.scrollHeight)}px`));
    }
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
    const langs = this.props.langs;
    const values = this.props.values;
    const primarykeys = this.props.primarykeys;
    return (
      <div className="application-locales-table"
        style={{
          width: '100%',
          padding: '20px 32px'
        }}>
        <div className={'application-locales-table-header flex-columns flex-align-start'}
          style={{
            textAlign: 'center',
            marginBottom: '20px'
          }}>
          {langs.map(key => <span key={`header-${key}`}
            className="flex-responsive-child"
            style={{
              maxWidth: '350px'
            }}>{key}</span>)}
        </div>
        {primarykeys.map(key =>
          <LocalesTableRow key={`row_${key}`}
            langs={langs}
            primarykey={key}
            facade={this.props.facade}
            values={values.map(obj => (obj[key] || ''))} />)}
      </div>
    );
  }
}

LocalesTable.propTypes = {
  langs: React.PropTypes.array.isRequired,
  values: React.PropTypes.array.isRequired,
  facade: React.PropTypes.object.isRequired,
  primarykeys: React.PropTypes.array.isRequired
};

export default LocalesTable;
