import React from 'react';

const ApplicationHeader = () => (
  <div className="application-header"
    style={{
      width: '100%',
      background: '#FBFBFB'
    }}>
    <h1 style={{
      margin: '10px 0',
      textAlign: 'center'
    }}>
      <img alt="JSON Translation Online Editor"
        style={{
          width: '40px',
          height: '40px',
          marginRight: '10px',
          verticalAlign: 'bottom'
        }}
        src={logo} />
      <span>JSON Translation Online Editor</span>
    </h1>
  </div>
);

ApplicationHeader.defaultProps = {};

ApplicationHeader.propTypes = {};

export default ApplicationHeader;
