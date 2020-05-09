import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Logo from '../../../assets/logo';
import Create from './create';
import Login from './login';
import Signin from './signin';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    background: theme.header,
    composes: ['flex-rows', 'items-center', 'flex-center'],
  }),
  logo: {
    color: '#FFFFFF',
    composes: ['text-center'],
    fontSize: 48,
    marginBottom: 48,
  },
});

const HomeViewComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.container} id="home-view">
      <div className={classes.logo}>
        <Logo />
      </div>
      <Login />
      <Create />
      <Signin />
    </div>
  );
});

export default HomeViewComponent;
