import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';

import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '../../../core/firebase';
import { selectSubscribingEmail } from '../../../redux/selectors';
import GithubLogin from '../../commons/buttons/github';
import GoogleLogin from '../../commons/buttons/google';
import Brand from '../../layout/brand';
import Form from './form';
import Login from './login';
import Splitter from './splitter';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    background: theme.colors.layer,
    composes: ['flex-1', 'p42', 'text-center'],
  }),
  logo: ({ theme }) => ({
    color: theme.colors.gradient[0],
    textAlign: 'center',
  }),
  title: {
    composes: ['is-bold', 'fs16', 'mb24'],
  },
  wrapper: ({ theme }) => ({
    background: theme.colors.white,
    composes: ['p42', 'rnd3', 'shadow-around'],
    margin: '42px auto 0 auto',
    width: 400,
  }),
});

const SigninViewComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { state } = useLocation();
  const { subscribe } = state;

  const email = useSelector(selectSubscribingEmail);
  return (
    <React.Fragment>
      <IfFirebaseAuthed>{() => <Redirect to="/" />}</IfFirebaseAuthed>
      <IfFirebaseUnAuthed>
        {() => (
          <div className={classes.container} id="signin-view">
            <Brand className={classes.logo} />
            <div className={classes.wrapper}>
              <h1 className={classes.title}>
                {!subscribe && <span>Connectez-vous à votre compte</span>}
                {subscribe && <span>Créez votre compte</span>}
              </h1>
              <Form email={email} />
              <Splitter />
              <GithubLogin login={subscribe} />
              <GoogleLogin className="mt7" login={subscribe} />
              <Login subscribe={subscribe} />
            </div>
          </div>
        )}
      </IfFirebaseUnAuthed>
    </React.Fragment>
  );
});

export default SigninViewComponent;
