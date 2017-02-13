import React from 'react';
// project
import logo from './../../assets/json_logo.svg';

const ApplicationHeader = () => (
  <div className="application-header flex-columns"
    style={{
      textAlign: 'left',
      padding: '20px 32px 20px 32px'
    }}>
    <a href="/">
      <img alt="JSON Translation Online Editor"
        style={{
          width: '60px',
          height: '60px',
          marginRight: '10px',
          verticalAlign: 'bottom'
        }}
        src={logo} />
    </a>
    <div>
      <h1 style={{
        margin: '0',
        lineHeight: '1.25em',
        fontWeight: 'normal'
      }}>
        <span>JSON Translation Online Editor</span>
      </h1>
      <h2 style={{
        margin: '0',
        color: '#8e8e8e',
        marginTop: '7px',
        fontWeight: 'normal',
        fontSize: '1.285715em'
      }}>
        <span>Create/Update JSON languages files in a simple way</span>
      </h2>
    </div>
  </div>
);

export default ApplicationHeader;
