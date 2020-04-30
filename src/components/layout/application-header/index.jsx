import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import GithubStarButton from './github-star-button';
import JSONLogo from './json-logo';
import OctocatCorner from './octocat-corner';
import TwitterShareButton from './twitter-share-button';

const useStyles = createUseStyles({
  container: {
    composes: [
      'flex-columns',
      'flex-around',
      'py20',
      'px32',
      'is-relative',
      'text-left',
    ],
  },
  subtitle: {
    color: '#8e8e8e',
    fontSize: '1.285715em',
    fontWeight: 'normal',
    margin: '0',
    marginTop: 7,
  },
  title: ({ theme }) => ({
    color: theme.colors.body,
    fontWeight: 'normal',
    lineHeight: '1.25em',
    margin: 0,
  }),
  wrapper: {
    composes: ['flex-columns', 'flex-center'],
  },
});

const { NODE_ENV } = process.env;
const isDevelopment = NODE_ENV === 'development';

const ApplicationHeader = ({ theme }) => {
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      {isDevelopment && <OctocatCorner direction="left" />}
      <div className={classes.wrapper}>
        <JSONLogo />
        <div>
          <h1 className={classes.title}>
            <span>i18n Online Translations Editor (JSON)</span>
          </h1>
          <h2 className={classes.subtitle}>
            <span>Create/Update your languages files in a simple way</span>
          </h2>
        </div>
      </div>
      {isDevelopment && (
        <div>
          <TwitterShareButton />
          <GithubStarButton />
        </div>
      )}
    </div>
  );
};

ApplicationHeader.propTypes = {
  theme: PropTypes.shape().isRequired,
};

export default ApplicationHeader;
