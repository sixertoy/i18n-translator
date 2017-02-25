import slug from 'slug';
import React from 'react';
// project
import LocaleTableRowInput from './LocaleTableRowInput';

class LocalesTableRow extends React.PureComponent {

  /* ------------------------------------------------

   Statics

  ------------------------------------------------ */

  static renderRowDescription (value) {
    return (
      <p className="application-table-row-description"
        style={{
          marginTop: '0',
          marginBottom: '7px'
        }}><em>{value}</em></p>
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
    return (
      <tr className={`application-table-row ${slug(primarykey.toLowerCase())}`}
        style={{
          backgroundColor: this.props.odd
            ? 'transparent'
            : this.context.theme.greylight
        }} >
        <td className="application-table-primarykey table-cell-ellipsis"
          style={{
            width: '8%',
            padding: '12px',
            textAlign: 'right',
            verticalAlign: 'top'
          }}>
          {/*

            primary key column

          */}
          <span style={{
            color: '#CCCCCC',
            fontSize: '0.9em'
          }}><a name={primarykey}>{`# ${primarykey}`}</a></span>
        </td>
        {/*

          translation value columns

        */}
        {values.map((str, index) =>
          <LocaleTableRowInput key={`${langs[index]}-${primarykey}`}
            facade={this.props.facade}
            value={str || ''}
            lang={langs[index]}
            primarykey={primarykey} />)}
      </tr>
    );
  }

}

LocalesTableRow.contextTypes = {
  theme: React.PropTypes.object,
  facade: React.PropTypes.object
};

LocalesTableRow.propTypes = {
  odd: React.PropTypes.bool.isRequired,
  langs: React.PropTypes.array.isRequired,
  values: React.PropTypes.array.isRequired,
  facade: React.PropTypes.object.isRequired,
  primarykey: React.PropTypes.string.isRequired
};

export default LocalesTableRow;
