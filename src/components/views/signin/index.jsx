import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { Link, Redirect, useLocation } from 'react-router-dom';

import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '../../../core/firebase';
import { selectSubscribingEmail } from '../../../redux/selectors';
import GithubLogin from '../../commons/buttons/github';
import GoogleLogin from '../../commons/buttons/google';
import Brand from '../../layout/brand';
import Form from './form';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    background: theme.colors.layer,
    composes: ['flex-1', 'p42', 'text-center'],
  }),
  divider: ({ theme }) => ({
    background: theme.colors.black,
    border: 0,
    composes: ['is-block', 'my12'],
    height: 1,
  }),
  logo: ({ theme }) => ({
    color: theme.colors.gradient[0],
    textAlign: 'center',
  }),
  signin: {},
  splitter: {},
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
  const label = (subscribe && 'Se connecter') || "s'inscrire";
  const mail = useSelector(selectSubscribingEmail);
  return (
    <React.Fragment>
      <IfFirebaseAuthed>{() => <Redirect to="/" />}</IfFirebaseAuthed>
      <IfFirebaseUnAuthed>
        {() => (
          <div className={classes.container} id="signin-view">
            <Brand className={classes.logo} />
            <div className={classes.wrapper}>
              <Form mail={mail} />
              <span className={classes.splitter}>
                <span>-&nbsp;ou&nbsp;-</span>
              </span>
              <GithubLogin login={label} />
              <GoogleLogin className="mt7" login={subscribe} />
              <hr className={classes.divider} />
              <Link
                className={classes.signin}
                to={{
                  pathname: '/signin',
                  state: { subscribe: false },
                }}>
                <span>Vous avez déjà un compte ? Connectez-vous</span>
              </Link>
            </div>
          </div>
        )}
      </IfFirebaseUnAuthed>
    </React.Fragment>
  );
});

export default SigninViewComponent;
