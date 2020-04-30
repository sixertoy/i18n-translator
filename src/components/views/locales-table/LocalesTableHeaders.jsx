import React from 'react';

const LocalesTableHeaders = props => (
  <div
    className="headers flex-no-grow-no-shrink"
    style={{
      borderTop: '1px solid #FFF',
      color: '#C0C0C0',
      textShadow: '1px 1px 1px #FFF',
      width: '100%',
    }}>
    <div
      className="flex-columns"
      style={{
        fontSize: '0.8em',
        margin: '0',
        padding: '0 32px',
        width: '100%',
      }}>
      <span
        style={{
          padding: '12px 0',
          textAlign: 'right',
          width: '8%',
        }}>
        Primary Keys
      </span>
      {props.langs.map(key => (
        <span
          key={`header-${key}`}
          style={{
            maxWidth: '50%',
            padding: '12px 12px',
            textAlign: 'center',
            width:
              props.collapsed.indexOf(key) !== -1
                ? '100px'
                : `${(100 - 8) / props.langs.length}%`,
          }}>
          <button
            style={{
              background: 'transparent',
              border: '0',
              color: 'inherit',
              fontSize: '1em',
              padding: '0',
              width: '100%',
            }}
            onClick={evt => props.ontoggle(evt, key)}>
            <span>{key}</span>
          </button>
        </span>
      ))}
    </div>
  </div>
);

LocalesTableHeaders.propTypes = {
  langs: React.PropTypes.array.isRequired,
  ontoggle: React.PropTypes.func.isRequired,
};

export default LocalesTableHeaders;
