import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { createUseStyles } from 'react-jss';

import octocat from '../../../assets/octocat.svg';

const useStyles = createUseStyles({
  container: {
    position: 'absolute',
    top: 0,
    zIndex: '99',
  },
  image: {
    height: 60,
    verticalAlign: 'bottom',
    width: 60,
  },
});

const OctocatCorner = ({ direction, repository }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.container}
      id="octocat-corner"
      style={{ [direction]: 0 }}>
      <a
        aria-label="View source on Github"
        className="github-corner"
        href={repository.url}>
        <img
          alt="i18n Online Translations Editor (JSON)"
          className={classes.image}
          src={octocat}
        />
      </a>
      <Helmet
        style={[
          {
            cssText:
              '.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}',
            type: 'text/css',
          },
        ]}
      />
    </div>
  );
};

OctocatCorner.defaultProps = {
  direction: 'left',
};

OctocatCorner.propTypes = {
  direction: PropTypes.string,
  repository: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default OctocatCorner;