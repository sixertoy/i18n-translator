import React from 'react';

const GithubStarButton = () => (
  <a className="github-button"
    href="https://github.com/ntkme/github-buttons"
    data-style="mega"
    data-count-aria-label="# stargazers on GitHub"
    data-count-href="/ntkme/github-buttons/stargazers"
    data-count-api="/repos/ntkme/github-buttons#stargazers_count"
    aria-label="Star ntkme/github-buttons on GitHub">{this.props.label}</a>
);

GithubStarButton.defaultProps = {
  label: 'Star'
};

GithubStarButton.propTypes = {
  label: React.PropTypes.string,
  repository: React.PropTypes.string.isRequired
};

export default GithubStarButton;
