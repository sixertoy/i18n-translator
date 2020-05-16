import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '@react-firebase/auth';
import firebase from 'firebase/app';
import React, { useCallback } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { updateAnonymous } from '../../../redux/actions';
import { selectSubscribingEmail } from '../../../redux/selectors';
import Form from './form';
import Help from './help';
import Nav from './nav';

const useStyles = createUseStyles({
  bottom: {
    margin: '24px auto 32px auto',
    width: 680,
  },
  container: ({ theme }) => ({
    background: theme.app.landing,
    composes: ['ff-roboto'],
    height: '100%',
    minHeight: 650,
  }),
  link: {},
  wrapper: ({ theme }) => ({
    color: theme.colors.white,
    margin: '0 auto',
    width: 680,
  }),
});

const LandingViewComponent = React.memo(() => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const classes = useStyles({ theme });

  const mail = useSelector(selectSubscribingEmail);

  const onDemoClick = useCallback(() => {
    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        dispatch(updateAnonymous());
      })
      .catch(err => {
        console.log('err', err);
      });
  }, [dispatch]);

  return (
    <React.Fragment>
      <IfFirebaseAuthed>{() => <Redirect to="/home" />}</IfFirebaseAuthed>
      <IfFirebaseUnAuthed>
        {() => (
          <div className={classes.container} id="landing-view">
            <Nav />
            <div className={classes.wrapper}>
              <Help />
            </div>
            <div className={classes.bottom}>
              <Form mail={mail} />
              <button type="button" onClick={onDemoClick}>
                <span>Continuer sans s&apos;inscrire</span>
              </button>
            </div>
          </div>
        )}
      </IfFirebaseUnAuthed>
    </React.Fragment>
  );
});

export default LandingViewComponent;
