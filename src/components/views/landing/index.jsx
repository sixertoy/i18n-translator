import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '@react-firebase/auth';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Redirect } from 'react-router-dom';

import Logo from '../../../assets/logo';
import Create from './create';
import Help from './help';

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
  // splitter: ({ theme }) => ({
  //   background: theme.colors.black,
  //   border: 0,
  //   composes: ['is-block', 'my12'],
  //   height: 1,
  //   opacity: 0.15,
  // }),
});

const LandingViewComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <React.Fragment>
      <IfFirebaseAuthed>{() => <Redirect to="/home" />}</IfFirebaseAuthed>
      <IfFirebaseUnAuthed>
        {() => (
          <div className={classes.container} id="landing-view">
            <div className={classes.logo}>
              <Logo />
            </div>
            <Create />
            <Help />
          </div>
        )}
      </IfFirebaseUnAuthed>
    </React.Fragment>
  );
});

export default LandingViewComponent;
