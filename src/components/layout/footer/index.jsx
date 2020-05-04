import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { repository, version } from '../../../../package.json';
// import { rgba } from '../../../core/utils/colors';

// import GithubStarButton from './github-star-button';
// import TwitterShareButton from './twitter-share-button';

const useStyles = createUseStyles({
  baseline: {
    borderRadius: '4px 4px 0 0',
    composes: ['py0', 'px12', 'debug'],
    textTransform: 'uppercase',
  },
  container: {
    composes: [
      'debug',
      'flex-columns',
      'flex-between',
      'px32',
      'py0',
      'fs8',
      'items-center',
      'is-uppercase',
    ],
    letterSpacing: '0.12em',
  },
  // love: { color: theme.colors.red },
  version: {
    composes: ['debug'],
  },
});

// const { NODE_ENV } = process.env;
// const isDevelopment = NODE_ENV === 'development';

const ApplicationFooter = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <div>
        <a className={classes.version} href={repository.url}>
          <span>v{version} - i18n Online Translation Editor</span>
        </a>
      </div>
      <div className={classes.baseline}>
        Made with <span className={classes.love}>♥</span> and React
      </div>
      {/* {!isDevelopment && (
        <div>
          <TwitterShareButton homepage={homepage} />
          <GithubStarButton name={name} repository={repository} />
        </div>
      )} */}
    </div>
  );
};

export default ApplicationFooter;
