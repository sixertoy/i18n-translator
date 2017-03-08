import React from 'react';

const LocalesTableHeaders = props => (
  <div className="headers flex-no-grow-no-shrink"
    style={{
      width: '100%',
      color: '#C0C0C0',
      borderTop: '1px solid #FFF',
      textShadow: '1px 1px 1px #FFF'
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
          maxWidth: '50%',
          textAlign: 'center',
          padding: '12px 12px',
          width: (props.collapsed.indexOf(key) !== -1)
            ? '100px'
            : `${((100 - 8) / props.langs.length)}%`
        }}>
        <button style={{
          border: '0',
          padding: '0',
          width: '100%',
          fontSize: '1em',
          color: 'inherit',
          background: 'transparent'
        }}
          onClick={evt => props.ontoggle(evt, key)}>
          <span>{key}</span>
        </button>
      </span>)}
    </div>
  </div>
);

LocalesTableHeaders.propTypes = {
  langs: React.PropTypes.array.isRequired,
  ontoggle: React.PropTypes.func.isRequired
};

export default LocalesTableHeaders;
