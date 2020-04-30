import React from 'react';

import logo from '../../assets/json_logo.svg';
import GithubStarButton from '../../core/views/GithubStarButton';
import TwitterShareButton from '../../core/views/TwitterShareButton';

const ApplicationHeader = props => (
  <div
    className="application-header flex-columns flex-space-around"
    style={{
      padding: '20px 32px 20px 32px',
      position: 'relative',
      textAlign: 'left',
    }}>
    <div className="flex-columns flex-centered">
      <a href="/">
        <img
          alt="i18n Online Translations Editor (JSON)"
          src={logo}
          style={{
            height: '60px',
            marginRight: '10px',
            verticalAlign: 'bottom',
            width: '60px',
          }}
        />
      </a>
      <div>
        <h1
          style={{
            fontWeight: 'normal',
            lineHeight: '1.25em',
            margin: '0',
          }}>
          <span>i18n Online Translations Editor (JSON)</span>
        </h1>
        <h2
          style={{
            color: '#8e8e8e',
            fontSize: '1.285715em',
            fontWeight: 'normal',
            margin: '0',
            marginTop: '7px',
          }}>
          <span>Create/Update your languages files in a simple way</span>
        </h2>
      </div>
    </div>
    <div
      style={{
        position: 'absolute',
        right: '32px',
      }}>
      <span
        style={{
          marginRight: '12px',
        }}>
        <TwitterShareButton
          projecturl={`https://sixertoy.github.io/${props.appname}`}
          username="sixertoy"
        />
      </span>
      <span>
        <GithubStarButton projectname={props.appname} username="sixertoy" />
      </span>
    </div>
  </div>
);

ApplicationHeader.propTypes = {
  appname: React.PropTypes.string.isRequired,
};

export default ApplicationHeader;
