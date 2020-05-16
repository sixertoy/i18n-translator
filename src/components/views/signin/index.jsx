import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '@react-firebase/auth';
import get from 'lodash.get';
import { parse as parseSearch } from 'query-string';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Redirect, useLocation } from 'react-router-dom';

import EmailSignin from '../../commons/buttons/email';
import GithubLogin from '../../commons/buttons/github';
import GoogleLogin from '../../commons/buttons/google';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    background: theme.colors.container,
    composes: ['flex-1'],
  }),
  form: ({ theme }) => ({
    background: theme.colors.white,
    composes: ['flex-rows', 'flex-between', 'items-center', 'p24'],
    height: 300,
    margin: '0 auto',
    width: 300,
  }),
  layer: ({ theme }) => ({
    background: theme.colors.layer,
    composes: ['flex-columns', 'flex-center', 'items-center'],
    height: '100%',
  }),
});

const SigninViewComponent = React.memo(() => {
  const label = useRef('');
  const mail = useRef(null);
  const useLogin = useRef(false);
  const [email, setEmail] = useState(null);
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { pathname, search } = useLocation();

  const onInputChange = useCallback(evt => {
    evt.preventDefault();
    const { value } = evt.target;
    // const isempty = !value || typeof value !== 'string' || value.trim() === ''
    setEmail(value);
  }, []);

  useEffect(() => {
    const queryObj = parseSearch(search);
    mail.current = get(queryObj, 'mail', null);
    useLogin.current = pathname.indexOf('/signin') !== -1;
    label.current = (useLogin.current && 'Se connecter') || "s'inscrire";
  }, [email, pathname, search]);

  return (
    <React.Fragment>
      <IfFirebaseAuthed>{() => <Redirect to="/" />}</IfFirebaseAuthed>
      <IfFirebaseUnAuthed>
        {() => (
          <div className={classes.container} id="signin-view">
            <div className={classes.layer}>
              <div className={classes.form}>
                <div>logo</div>
                <div>
                  <span>{label.current}</span>
                </div>
                <EmailSignin email={email || mail} login={useLogin.current} />
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
          </div>
        )}
      </IfFirebaseUnAuthed>
    </React.Fragment>
  );
});

export default SigninViewComponent;
