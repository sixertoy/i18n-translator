import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '@react-firebase/auth';
import React, { useEffect, useRef } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';

import { selectSubscribingEmail } from '../../../redux/selectors';
import Brand from '../../layout/brand';
// import EmailSignin from '../../commons/buttons/email';
// import GithubLogin from '../../commons/buttons/github';
// import GoogleLogin from '../../commons/buttons/google';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    background: theme.colors.layer,
    composes: ['flex-1', 'p42'],
  }),
  logo: ({ theme }) => ({
    color: theme.colors.gradient[0],
    textAlign: 'center',
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
    margin: '42px auto',
    width: 400,
  }),
});

const SigninViewComponent = React.memo(() => {
  // const label = useRef('');
  // const useLogin = useRef(false);
  const theme = useTheme();
  const classes = useStyles({ theme });
  // const { pathname } = useLocation();

  const mail = useSelector(selectSubscribingEmail);
  console.log('mail', mail);

  // useEffect(() => {
  //   useLogin.current = pathname.indexOf('/signin') !== -1;
  //   label.current = (useLogin.current && 'Se connecter') || "s'inscrire";
  // }, [mail, pathname]);

  return (
    <React.Fragment>
      <IfFirebaseAuthed>{() => <Redirect to="/" />}</IfFirebaseAuthed>
      <IfFirebaseUnAuthed>
        {() => (
          <div className={classes.container} id="signin-view">
            <Brand className={classes.logo} />
            <div className={classes.wrapper}>
              {/* <GithubLogin login={useLogin.current} />
              <GoogleLogin className="mt7" login={useLogin.current} /> */}
              {/* <div className={classes.title}>
                <span>{label.current}</span>
              </div>
              <EmailSignin email={mail} login={useLogin.current} />
              <div>
                <span>Vous n&apos;arrivez pas à vous connecter </span>?
              </div>
              <div>
                <span>Inscrivez-vous</span>
              </div> */}
            </div>
          </div>
        )}
      </IfFirebaseUnAuthed>
    </React.Fragment>
  );
});

export default SigninViewComponent;
