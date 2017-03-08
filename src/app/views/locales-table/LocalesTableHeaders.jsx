import React from 'react';

const LocalesTableHeaders = props => (
  <div className="headers flex-no-grow-no-shrink"
    style={{
      width: '100%'
    }}>
    <div className={'flex-columns'}
      style={{
        margin: '0',
        width: '100%',
        padding: '0 32px',
        fontSize: '0.8em'
      }}>
      <span style={{
        width: '8%',
        padding: '12px 0',
        textAlign: 'right'
      }}>Primary Keys</span>
      {props.langs.map(key => <span key={`header-${key}`}
        style={{
          maxWidth: '400px',
          textAlign: 'center',
          padding: '12px 12px',
          width: `${((100 - 8) / props.langs.length)}%`
        }}>{key}</span>)}
    </div>
  </div>
);

LocalesTableHeaders.propTypes = {
  langs: React.PropTypes.array.isRequired
};

export default LocalesTableHeaders;
