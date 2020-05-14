import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '@react-firebase/auth';
import React, { useEffect, useState } from 'react';
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
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { pathname } = useLocation();
  const [title, setTitle] = useState(false);
  const [useLogin, setUseLogin] = useState(false);

  useEffect(() => {
    const uselogin = pathname.indexOf('/login') !== -1;
    const label = (uselogin && 'Se connecter') || "s'inscrire";
    setTitle(label);
    setUseLogin(uselogin);
  }, [pathname, title]);

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
                  <span>{title}</span>
                </div>
                <EmailSignin login={useLogin} />
                <GithubLogin login={useLogin} />
                <GoogleLogin className="mt7" login={useLogin} />
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
