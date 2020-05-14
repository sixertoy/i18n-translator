import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '@react-firebase/auth';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Redirect } from 'react-router-dom';

import Logo from '../../../assets/logo';
import CreateButton from './create';
import Help from './help';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    background: theme.colors.grey,
    composes: ['flex-rows', 'items-center', 'flex-center'],
  }),
  icon: {
    composes: ['mr12'],
  },
  link: ({ theme }) => ({
    color: theme.colors.white,
    composes: ['is-bold', 'is-underline'],
  }),
  // splitter: {
  //   composes: ['is-block', 'my24', 'text-center', 'fs18'],
  // },
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
            <CreateButton />
            {/* <span className={classes.splitter}>
              <span>-&nbsp;ou&nbsp;-</span>
            </span> */}
            <Help />
          </div>
        )}
      </IfFirebaseUnAuthed>
    </React.Fragment>
  );
});

export default LandingViewComponent;
