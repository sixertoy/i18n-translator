import React from 'react';
import slug from 'slug';

import LocalesTableRowInput from './LocalesTableRowInput';

class LocalesTableRow extends React.PureComponent {
  static renderRowDescription(value) {
    return (
      <p
        className="application-table-row-description"
        style={{
          marginBottom: '7px',
          marginTop: '0',
        }}>
        <em>{value}</em>
      </p>
    );
  }

  constructor(props) {
    super(props);
    this.state = {};
    this._initialized = false;
  }

  render() {
    const { langs } = this.props;
    const { values } = this.props;
    const { primarykey } = this.props;
    return (
      <p
        className={`table-row flex-columns ${slug(primarykey.toLowerCase())}`}
        style={{
          backgroundColor: this.props.odd
            ? 'rgb(245, 245, 245)'
            : 'rgba(246, 246, 246, 0.42)',
          borderBottom: this.props.odd ? '0' : '1px solid #F6F6F6',
          borderTop: this.props.odd
            ? '1px solid #FFFFFF'
            : '1px solid rgba(0, 0, 0, 0.03)',
          margin: '0',
          padding: '12px 32px',
        }}>
        <span
          style={{
            color: '#CCCCCC',
            fontSize: '0.9em',
            fontWeight: 'bold',
            textAlign: 'right',
            width: '8%',
          }}>
          <a name={primarykey}>
            <span>{`# ${primarykey}`}</span>
          </a>
        </span>
        {/* <!-- translation value columns --> */}
        {values.map((str, index) => (
          <LocalesTableRowInput
            key={`${langs[index]}-${primarykey}`}
            facade={this.context.facade}
            lang={langs[index]}
            primarykey={primarykey}
            value={str || ''}
            width={
              this.props.collapsed.indexOf(langs[index]) !== -1
                ? '100px'
                : `${(100 - 8) / langs.length}%`
            }
          />
        ))}
      </p>
    );
  }
}

LocalesTableRow.contextTypes = {
  facade: React.PropTypes.object,
  theme: React.PropTypes.object,
};

LocalesTableRow.propTypes = {
  collapsed: React.PropTypes.array.isRequired,
  langs: React.PropTypes.array.isRequired,
  odd: React.PropTypes.bool.isRequired,
  primarykey: React.PropTypes.string.isRequired,
  values: React.PropTypes.array.isRequired,
};

export default LocalesTableRow;
