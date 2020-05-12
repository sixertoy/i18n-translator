import { FirebaseAuthConsumer } from '@react-firebase/auth';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Logo from '../../../assets/logo';
import Login from '../../commons/login';
import Create from './create';
import Help from './help';
import BoardRedirect from './redirect';

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
  splitter: ({ theme }) => ({
    background: theme.colors.black,
    border: 0,
    composes: ['is-block', 'my12'],
    height: 1,
    opacity: 0.15,
  }),
});

const HomeViewComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <FirebaseAuthConsumer>
      {({ isSignedIn }) => (
        <React.Fragment>
          {isSignedIn && <BoardRedirect />}
          {!isSignedIn && (
            <div className={classes.container} id="home-view">
              <div className={classes.logo}>
                <Logo />
              </div>
              <Login login />
              <hr className={classes.splitter} />
              <Create />
              <Help />
            </div>
          )}
          )
        </React.Fragment>
      )}
    </FirebaseAuthConsumer>
  );
});

export default HomeViewComponent;
