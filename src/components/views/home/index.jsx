import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Logo from '../../../assets/logo';
import GithubLogin from '../../commons/buttons/github';
import GoogleLogin from '../../commons/buttons/google';
import Create from './create';
import Signin from './signin';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    background: theme.colors.grey,
    composes: ['flex-rows', 'items-center', 'flex-center'],
  }),
  logo: ({ theme }) => ({
    color: theme.colors.white,
    composes: ['text-center', 'fs48'],
    marginBottom: 48,
  }),
});

const HomeViewComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.container} id="home-view">
      <div className={classes.logo}>
        <Logo />
      </div>
      <div>
        <GithubLogin login />
        <GoogleLogin login className="mt12" />
      </div>
      <Create />
      <Signin />
    </div>
  );
});

export default HomeViewComponent;
