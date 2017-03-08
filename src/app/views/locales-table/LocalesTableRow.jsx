import slug from 'slug';
import React from 'react';
// project
import LocalesTableRowInput from './LocalesTableRowInput';

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
      <p className={`table-row flex-columns ${slug(primarykey.toLowerCase())}`}
        style={{
          margin: '0',
          padding: '12px 32px',
          borderTop: this.props.odd
            ? '1px solid #FFFFFF'
            : '1px solid rgba(0, 0, 0, 0.03)',
          borderBottom: this.props.odd
            ? '0'
            : '1px solid #F6F6F6',
          backgroundColor: this.props.odd
            ? 'rgb(245, 245, 245)'
            : 'rgba(246, 246, 246, 0.42)'
        }} >
        <span style={{
          width: '8%',
          color: '#CCCCCC',
          fontSize: '0.9em',
          textAlign: 'right',
          fontWeight: 'bold'
        }}>
          <a name={primarykey}>
            <span>{`# ${primarykey}`}</span>
          </a>
        </span>
        {/* <!-- translation value columns --> */}
        {values.map((str, index) =>
          <LocalesTableRowInput key={`${langs[index]}-${primarykey}`}
            facade={this.context.facade}
            value={str || ''}
            lang={langs[index]}
            primarykey={primarykey}
            width={(this.props.collapsed.indexOf(langs[index]) !== -1)
              ? '100px'
              : `${((100 - 8) / langs.length)}%`} />)}
      </p>
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
  collapsed: React.PropTypes.array.isRequired,
  primarykey: React.PropTypes.string.isRequired
};

export default LocalesTableRow;
