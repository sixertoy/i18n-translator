import React from 'react';
// project
import logo from './../../assets/json_logo.svg';
import GithubStarButton from './../../core/views/GithubStarButton';
import TwitterShareButton from './../../core/views/TwitterShareButton';

const ApplicationHeader = props => (
  <div className="application-header flex-columns flex-space-around"
    style={{
      textAlign: 'left',
      position: 'relative',
      padding: '20px 32px 20px 32px'
    }}>
    <div className="flex-columns flex-centered">
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
    <div style={{
      right: '32px',
      position: 'absolute'
    }}>
      <span style={{
        marginRight: '12px'
      }}>
        <TwitterShareButton username="sixertoy"
          projecturl={`https://sixertoy.github.io/${props.appname}`} />
      </span>
      <span>
        <GithubStarButton username="sixertoy"
          projectname={props.appname} />
      </span>
    </div>
  </div>
);

ApplicationHeader.propTypes = {
  appname: React.PropTypes.string.isRequired
};

export default ApplicationHeader;
