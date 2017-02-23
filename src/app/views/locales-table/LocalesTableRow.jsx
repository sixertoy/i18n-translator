import slug from 'slug';
import React from 'react';
// project
import LocaleTableRowInput from './LocaleTableRowInput';

class LocalesTableRow extends React.PureComponent {

  /* ------------------------------------------------

   Statics

  ------------------------------------------------ */

  static renderRowPrimaryKeyName (value) {
    return (
      <p className="application-locales-table-row-primarykey-name"
        style={{
          marginTop: '0',
          color: '#CCCCCC',
          fontSize: '0.9em',
          marginBottom: '3px'
        }}><a name={value}>{`# ${value}`}</a></p>
    );
  }

  static renderRowDescription (value) {
    return (
      <p className="application-locales-table-row-description"
        style={{
          marginTop: '0',
          marginBottom: '7px'
        }}><em>{value}</em></p>
    );
  }

  static renderRowLanguagesInput (facade, { primarykey, langs, values }) {
    return (
      <p className="flex-columns"
        style={{
          marginTop: '0',
          marginBottom: '3px'
        }}>
        {values.map((str, index) =>
          <LocaleTableRowInput key={`${langs[index]}-${primarykey}`}
            facade={facade}
            primarykey={primarykey}
            value={str || ''} />)}
      </p>
    );
  }

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
    const primarykey = this.props.primarykey;
    const classes = 'application-locales-table-row';
    return (
      <div className={`${classes} ${slug(primarykey.toLowerCase())}`}
        style={{
          marginBottom: '22px'
        }} >
        {LocalesTableRow.renderRowPrimaryKeyName(primarykey)}
        {LocalesTableRow.renderRowLanguagesInput(this.props.facade, { primarykey, langs, values })}
      </div>
    );
  }

}

LocalesTableRow.propTypes = {
  langs: React.PropTypes.array.isRequired,
  values: React.PropTypes.array.isRequired,
  facade: React.PropTypes.object.isRequired,
  primarykey: React.PropTypes.string.isRequired
};

export default LocalesTableRow;