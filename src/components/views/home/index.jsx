import React from 'react';
import { AiOutlineArrowRight as RightArrow } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

import GithubLogin from '../../commons/buttons/github';
import GoogleLogin from '../../commons/buttons/google';

const useStyles = createUseStyles({
  button: {
    background: '#FFFFFF',
    borderRadius: 4,
    composes: ['is-block', 'px24', 'py12', 'fs18', 'text-center'],
    width: 250,
  },
  container: ({ theme }) => ({
    background: theme.header,
    composes: ['flex-rows', 'items-center', 'flex-center'],
  }),
  icon: {},
  signin: {
    color: '#FFFFFF',
    composes: ['fs20'],
  },
  splitter: {
    composes: ['is-block', 'my24', 'text-center', 'fs18'],
  },
});

const StartViewComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container} id="home-view">
      {/* <div className={classes.logo}>
        <svg
          className={classes.svg}
          viewBox="0 0 510 510"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M470.012 379.743S353.102 157.52 121.302 51.1c0 0-8.877-3.389-10.99 5.01-2.113 8.398 8.14 9.715 13.988 15.029 5.85 5.313 196.923 114.895 345.712 360.705L485 496.972l-4.996 13.025-83.93-102.2s-208.598 7.279-298.75-159.311c0 0 63.372-18.325 80.931-17.034 0 0-44.299-29.872-98.917-18.035l-20.983-51.1s13.326-17.767 72.94-26.05c0 0-48.676-28.926-83.93-11.022v2.004S21.578 43.024 25.383-.001c0 0 139.43 14.515 211.823 51.1 0 0-7.022 30.478 29.975 54.107 0 0-6.936-31.735 2.998-42.083 0 0 256.39 100.123 199.833 316.62z" />
        </svg>
      </div> */}
      <div className={classes.wrapper}>
        <GithubLogin login />
        <GoogleLogin login />
      </div>
      <span className={classes.splitter}>
        <span>-&nbsp;ou&nbsp;-</span>
      </span>
      <Link className={classes.button} to="/import">
        <span>Créer un projet</span>
        <RightArrow className={classes.icon} />
      </Link>
      {/* <div className={classes.signin}>
        <p>
          <Link to="/home/signin">
            <span>Enregistrez vous</span>
          </Link>
          &nbsp;pour créer plus de projets
        </p>
      </div> */}
    </div>
  );
};

export default StartViewComponent;
