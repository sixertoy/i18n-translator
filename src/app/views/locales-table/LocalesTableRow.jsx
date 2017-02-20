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
          marginLeft: '12px',
          marginBottom: '3px'
        }}><a name={value}>{`# ${value}`}</a></p>
    );
  }

  static renderRowDescription (value) {
    return (
      <p className="application-locales-table-row-description"
        style={{
          marginTop: '0',
          marginLeft: '12px',
          marginBottom: '7px'
        }}><em>{value}</em></p>
    );
  }

  static renderRowLanguagesInput (facade, { pkey, langs, values }) {
    return (
      <p className="flex-columns"
        style={{
          marginTop: '0',
          marginBottom: '3px'
        }}>
        {langs.map((lang, index) =>
          <LocaleTableRowInput key={`${lang}_${pkey}`}
            lang={lang}
            facade={facade}
            primarykey={pkey}
            value={values[index] || ''} />)}
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
    const pkey = this.props.primarykey;
    const desc = this.props.description;
    const classes = 'application-locales-table-row';
    return (
      <div className={`${classes} ${slug(pkey.toLowerCase())} ${slug(desc)}`}
        style={{
          marginBottom: '22px'
        }} >
        {LocalesTableRow.renderRowDescription(desc)}
        {LocalesTableRow.renderRowPrimaryKeyName(pkey)}
        {LocalesTableRow.renderRowLanguagesInput(this.props.facade, { pkey, langs, values })}
      </div>
    );
  }

}

LocalesTableRow.propTypes = {
  langs: React.PropTypes.array.isRequired,
  values: React.PropTypes.array.isRequired,
  facade: React.PropTypes.object.isRequired,
  primarykey: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
};

export default LocalesTableRow;
