import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { homepage, name, repository } from '../../../../package.json';
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
  title: {
    composes: ['m0', 'fs20'],
    fontFamily: ['Cinzel', 'serif'],
  },
  wrapper: {
    composes: ['flex-columns', 'flex-center', 'items-center'],
  },
});

const { NODE_ENV } = process.env;
const isDevelopment = NODE_ENV === 'development';

const ApplicationHeader = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      {!isDevelopment && <OctocatCorner repository={repository} />}
      <div className={classes.wrapper}>
        <JSONLogo />
        <div>
          <h1 className={classes.title}>
            <span>i18n Online Translation Editor</span>
          </h1>
        </div>
      </div>
      {!isDevelopment && (
        <div>
          <TwitterShareButton homepage={homepage} />
          <GithubStarButton name={name} repository={repository} />
        </div>
      )}
    </div>
  );
};

export default ApplicationHeader;
