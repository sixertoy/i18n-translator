import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '@react-firebase/auth';
import get from 'lodash.get';
import { parse as parseSearch } from 'query-string';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link, Redirect, useLocation } from 'react-router-dom';

import Logo from '../../../assets/logo';
import EmailSignin from '../../commons/buttons/email';
import GithubLogin from '../../commons/buttons/github';
import GoogleLogin from '../../commons/buttons/google';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    background: theme.app.landing,
    composes: ['flex-1', 'p24'],
  }),
  layer: ({ theme }) => ({
    background: theme.colors.layer,
    composes: ['flex-columns', 'flex-center', 'items-center'],
    height: '100%',
  }),
  wrapper: ({ theme }) => ({
    background: theme.colors.white,
    composes: [
      'flex-rows',
      'flex-between',
      'items-center',
      'p42',
      'rnd3',
      'shadow-around',
    ],
    margin: '0 auto',
    width: 400,
  }),
});

const SigninViewComponent = React.memo(() => {
  const label = useRef('');
  const mail = useRef(null);
  const useLogin = useRef(false);
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { pathname, search } = useLocation();

  useEffect(() => {
    const queryObj = parseSearch(search);
    mail.current = get(queryObj, 'mail', null);
    useLogin.current = pathname.indexOf('/signin') !== -1;
    label.current = (useLogin.current && 'Se connecter') || "s'inscrire";
  }, [pathname, search]);

  return (
    <React.Fragment>
      <IfFirebaseAuthed>{() => <Redirect to="/" />}</IfFirebaseAuthed>
      <IfFirebaseUnAuthed>
        {() => (
          <div className={classes.container} id="signin-view">
            <Link className={classes.logo} to="/">
              <Logo outlined className={classes.svg} />
              <span className={classes.brand}>Typpo</span>
            </Link>
            <div className={classes.wrapper}>
              <div className={classes.title}>
                <span>{label.current}</span>
              </div>
              <EmailSignin email={mail} login={useLogin.current} />
              <GithubLogin login={useLogin.current} />
              <GoogleLogin className="mt7" login={useLogin.current} />
              <div>
                <span>Vous n&apos;arrivez pas à vous connecter </span>?
              </div>
              <div>
                <span>Inscrivez-vous</span>
              </div>
            </div>
          </div>
        )}
      </IfFirebaseUnAuthed>
    </React.Fragment>
  );
});

export default SigninViewComponent;
