import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { repository, version } from '../../../../package.json';
import { rgba } from '../../../core/utils/colors';

// import GithubStarButton from './github-star-button';
// import TwitterShareButton from './twitter-share-button';

const useStyles = createUseStyles({
  baseline: ({ theme }) => ({
    background: theme.colors.white,
    borderRadius: '4px 4px 0 0',
    color: '#A0A0A0',
    composes: ['py0', 'px12'],
    textTransform: 'uppercase',
  }),
  container: ({ theme }) => ({
    color: rgba(theme.colors.white, 0.8),
    composes: [
      'flex-columns',
      'flex-between',
      'px32',
      'py0',
      'fs8',
      'items-center',
      'is-uppercase',
    ],
    letterSpacing: '0.12em',
  }),
  love: ({ theme }) => ({
    color: theme.colors.red,
  }),
  version: ({ theme }) => ({
    color: theme.colors.dark,
  }),
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
