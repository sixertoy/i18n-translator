import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * @see https://buttons.github.io/
 *
 * <!-- Place this tag in your head or just before your close body tag. -->
 * <script async defer src="https://buttons.github.io/buttons.js"></script>
 */
const GithubStarButton = ({ name, repository }) => (
  <a
    aria-label={`Star sixertoy/${name} on GitHub"`}
    className="github-button"
    data-count-api={`/repos/sixertoy/${name}#stargazers_count`}
    data-count-aria-label="# stargazers on GitHub"
    data-count-href={`/sixertoy/${name}/stargazers`}
    data-style="mega"
    href={repository.url}>
    Star
    <Helmet
      script={[
        {
          src: 'https://buttons.github.io/buttons.js',
          type: 'text/javascript',
        },
      ]}
    />
  </a>
);

GithubStarButton.propTypes = {
  name: PropTypes.string.isRequired,
  repository: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default GithubStarButton;
