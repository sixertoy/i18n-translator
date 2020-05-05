import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { repository, version } from '../../../../package.json';
import Credits from './credits';
// import { rgba } from '../../../core/utils/colors';

// import GithubStarButton from './github-star-button';
// import TwitterShareButton from './twitter-share-button';

const useStyles = createUseStyles({
  footer: {
    composes: [
      'flex-0',
      'px32',
      'pb0',
      'pt12',
      'fs8',
      'is-uppercase',
      'is-relative',
    ],
    letterSpacing: '0.12em',
  },
  version: {},
});

// const { NODE_ENV } = process.env;
// const isDevelopment = NODE_ENV === 'development';

const ApplicationFooter = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.footer}>
      <a className={classes.version} href={repository.url}>
        <span>v{version} - i18n Online Translation Editor</span>
      </a>
      <Credits />
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
