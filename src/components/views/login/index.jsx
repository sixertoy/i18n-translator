import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Redirect } from 'react-router-dom';

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
    textAlign: 'center',
  }),
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
  return (
    <React.Fragment>
      <IfFirebaseAuthed>
        <Redirect to="/" />
      </IfFirebaseAuthed>
      <IfFirebaseUnAuthed>
        {() => (
          <div className={classes.container} id="signin-view">
            <Brand className={classes.logo} />
            <div className={classes.wrapper}>
              <Title />
              <Form />
              <Splitter />
              <GithubLogin />
              <GoogleLogin className="mt7" />
              <Bottom />
            </div>
          </div>
        )}
      </IfFirebaseUnAuthed>
    </React.Fragment>
  );
});

export default SigninViewComponent;
