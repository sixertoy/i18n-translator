import React from 'react';
// project
import LocalesTableRow from './LocalesTableRow';
import { entries } from './../../../core/utils/ObjectUtils';

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
    const locales = this.props.locales;
    const langs = Object.keys(locales);
    const primarykeys = this.props.primarykeys;
    return (
      <div className="application-locales-table"
        style={{
          width: '100%',
          padding: '20px'
        }}>
        {primarykeys.map(key =>
          <LocalesTableRow key={`row_${key}`}
            langs={langs}
            primarykey={key}
            isheader={false}
            facade={this.props.facade}
            values={langs.map(lang => locales[lang][key])} />)}
      </div>
    );
  }
}

LocalesTable.propTypes = {
  facade: React.PropTypes.object.isRequired,
  locales: React.PropTypes.array.isRequired,
  primarykeys: React.PropTypes.array.isRequired
};

export default LocalesTable;
