import React from 'react';
// project
import LocalesTableRow from './LocalesTableRow';
import { ObjectUtils } from './../../../core/utils';

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
          padding: '20px'
        }}>
        {ObjectUtils.entries(primarykeys).map(([pkey, desc], index) =>
          <LocalesTableRow key={`row_${pkey}`}
            langs={langs}
            primarykey={pkey}
            description={desc}
            isheader={index === 0}
            facade={this.props.facade}
            values={langs.map(lang => locales[lang][pkey])} />)}
      </div>
    );
  }

}

LocalesTable.propTypes = {
  facade: React.PropTypes.object.isRequired,
  locales: React.PropTypes.object.isRequired,
  primarykeys: React.PropTypes.object.isRequired
};

export default LocalesTable;
