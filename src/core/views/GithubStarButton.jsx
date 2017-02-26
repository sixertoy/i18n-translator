import React from 'react';
import Helmet from 'react-helmet';

/**
 * @see https://buttons.github.io/
 *
 * <!-- Place this tag in your head or just before your close body tag. -->
 * <script async defer src="https://buttons.github.io/buttons.js"></script>
 */
let GithubStarButton = props => (
  <a className="github-button"
    data-style="mega"
    data-count-aria-label="# stargazers on GitHub"
    href={`https://github.com/${props.username}/${props.projectname}`}
    aria-label={`Star ${props.username}/${props.projectname} on GitHub"`}
    data-count-api={`/repos/${props.username}/${props.projectname}#stargazers_count`}
    data-count-href={`/${props.username}/${props.projectname}/stargazers`}>{props.label}
    <Helmet script={[{
      type: 'text/javascript',
      src: 'https://buttons.github.io/buttons.js'
    }]} />
  </a>
);

GithubStarButton.defaultProps = {
  label: 'Star'
};

GithubStarButton.propTypes = {
  label: React.PropTypes.string,
  username: React.PropTypes.string.isRequired,
  projectname: React.PropTypes.string.isRequired
};

if (process.env.NODE_ENV === 'development') {
  GithubStarButton = () => false;
}

export default GithubStarButton;
