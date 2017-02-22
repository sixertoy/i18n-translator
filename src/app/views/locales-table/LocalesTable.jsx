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
    const values = this.props.values;
    const langs = Object.keys(values);
    const primarykeys = this.props.primarykeys;
    return (
      <div className="application-locales-table"
        style={{
          width: '100%',
          padding: '20px'
        }}>
        {langs.map(key => <span>{key}</span>)}
        {primarykeys.map(key =>
          <LocalesTableRow key={`row_${key}`}
            langs={langs}
            primarykey={key}
            isheader={false}
            facade={this.props.facade}
            values={langs.map(lang => values[lang][key])} />)}
      </div>
    );
  }
}

LocalesTable.propTypes = {
  values: React.PropTypes.array.isRequired,
  facade: React.PropTypes.object.isRequired,
  primarykeys: React.PropTypes.array.isRequired
};

export default LocalesTable;
