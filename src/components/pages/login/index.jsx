import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Redirect, useLocation } from 'react-router-dom';

import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '../../../core/firebase';
import GithubLogin from '../../commons/buttons/github';
import GoogleLogin from '../../commons/buttons/google';
import Brand from '../../layout/brand';
import Bottom from './bottom';
import Form from './form';
import Splitter from './splitter';
import Title from './title';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    background: theme.colors.layer,
    composes: ['flex-1', 'p42', 'text-center'],
  }),
  logo: ({ theme }) => ({
    color: theme.colors.gradient[0],
    display: 'inline',
    margin: '0 auto',
  }),
  wrapper: {
    background: '#FFFFFF',
    composes: ['p42', 'rnd3', 'shadow-around'],
    margin: '42px auto 0 auto',
    width: 400,
  },
  [`@media (max-width: ${480}px)`]: {
    container: {
      paddingBottom: 24,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTOP: 42,
    },
    wrapper: ({ theme }) => ({
      background: theme.colors.layer,
      boxShadow: 'none',
      marginTop: 24,
      padding: 24,
      width: '100%',
    }),
  },
});

const SigninViewComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { pathname } = useLocation();
  const useSignup = pathname === '/signup';
  return (
    <React.Fragment>
      <IfFirebaseAuthed>
        <Redirect to="/home" />
      </IfFirebaseAuthed>
      <IfFirebaseUnAuthed>
        <div className={classes.container} id="signin-view">
          <Brand className={classes.logo} />
          <div className={classes.wrapper}>
            <Title />
            <Form />
            <Splitter />
            <GithubLogin useSignup={useSignup} />
            <GoogleLogin className="mt7" useSignup={useSignup} />
            <Bottom />
          </div>
        </div>
      </IfFirebaseUnAuthed>
    </React.Fragment>
  );
});

export default SigninViewComponent;
