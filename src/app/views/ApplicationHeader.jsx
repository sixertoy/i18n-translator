import React from 'react';
import isempty from 'lodash.isempty';
import isstring from 'lodash.isstring';
// punkbeer
import logo from './../../assets/json_logo.svg';
import GithubStarButton from './../../core/views/GithubStarButton';

class ApplicationMainMenu extends React.PureComponent {

  constructor (props) {
    super(props);
    this.state = {};
  }

  /* --------------------------------------------------------

   Privates

  -------------------------------------------------------- */

  /* --------------------------------------------------------

   Renders Sub Components

  -------------------------------------------------------- */

  render () {
    return (
      <div className="application-header"
        style={{
          textAlign: 'center'
        }}>
        <h1 style={{
          margin: '10px 0',
          lineHeight: '1.25em'
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
        <h2 style={{
          color: '#8e8e8e',
          fontSize: '1.43em'
        }}>
          <span>Create/Update JSON languages files in a simple way</span>
        </h2>
      </div>
    );
  }

}

ApplicationMainMenu.propTypes = {
  langs: React.PropTypes.array.isRequired,
  facade: React.PropTypes.object.isRequired
};

export default ApplicationMainMenu;
