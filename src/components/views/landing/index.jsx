import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '@react-firebase/auth';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Redirect } from 'react-router-dom';

import Form from './form';
import Nav from './nav';

const useStyles = createUseStyles({
  bottom: {},
  container: ({ theme }) => ({
    background: theme.app.landing,
    composes: ['ff-roboto', 'p16'],
    height: '100%',
    minHeight: 650,
  }),
  description: {
    composes: ['pb12', 'fs24', 'is-light'],
    lineHeight: 1.4,
  },
  left: {
    width: 450,
  },
  right: {
    composes: ['flex-columns', 'flex-start', 'items-center'],
  },
  title: {
    composes: ['is-medium', 'mb24', 'fs48'],
    letterSpacing: 0.025,
    lineHeight: 1.05,
  },
  wrapper: ({ theme }) => ({
    color: theme.colors.white,
    composes: ['flex-columns', 'flex-center', 'items-start'],
  }),
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
            <Nav />
            <div className={classes.wrapper}>
              <div className={classes.left}>
                <h1 className={classes.title}>
                  Gagnez du temps dans la gestion de vos traductions avec Typpo.
                </h1>
                <p className={classes.description}>
                  Typpo permet de classer facilement vos traductions
                </p>
              </div>
              <div className={classes.right}>
                <Form />
              </div>
            </div>
            <div className={classes.bottom} />
          </div>
        )}
      </IfFirebaseUnAuthed>
    </React.Fragment>
  );
});

export default LandingViewComponent;
