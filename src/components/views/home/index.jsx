import React from 'react';
import { AiOutlineArrowRight as RightArrow } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

import GithubLogin from '../../commons/buttons/github';
import GoogleLogin from '../../commons/buttons/google';

const useStyles = createUseStyles({
  button: {
    background: '#FFFFFF',
    borderRadius: 28,
    composes: ['text-center'],
    fontSize: 40,
    height: 56,
    lineHeight: '50px',
    width: 56,
  },
  container: ({ theme }) => ({
    background: theme.header,
    composes: ['flex-rows', 'items-center', 'flex-center'],
  }),
});

const StartViewComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container} id="home-view">
      <div className={classes.wrapper}>
        <GithubLogin />
        <GoogleLogin />
      </div>
      <Link className={classes.button} to="/import">
        <RightArrow />
      </Link>
    </div>
  );
};

export default StartViewComponent;
