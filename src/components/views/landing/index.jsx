import firebase from 'firebase/app';
import React, { useCallback, useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '../../../core/firebase';
import { updateAnonymous } from '../../../redux/actions';
import { selectSubscribingEmail } from '../../../redux/selectors';
import Form from './form';
import Help from './help';
import Nav from './nav';

const useStyles = createUseStyles({
  anonymous: ({ theme }) => ({
    '&:disabled': { opacity: 1, textDecoration: 'none' },
    background: theme.colors.transparent,
    clear: 'right',
    color: theme.colors.white,
    composes: [
      'float-right',
      'text-center',
      'fs18',
      'is-block',
      'mt12',
      'is-underline',
    ],
    width: 300,
  }),
  bottom: {
    composes: ['clearfix'],
    margin: '24px auto 32px auto',
    width: 680,
  },
  container: ({ theme }) => ({
    background: theme.app.landing,
    composes: ['ff-roboto'],
    height: '100%',
  }),
});

const LandingViewComponent = React.memo(() => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const classes = useStyles({ theme });
  const [disabled, setDisabled] = useState(false);

  const mail = useSelector(selectSubscribingEmail);

  const onDemoClick = useCallback(() => {
    setDisabled(true);
    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        dispatch(updateAnonymous());
      })
      .catch(() => {
        setDisabled(false);
      });
  }, [dispatch]);

  return (
    <React.Fragment>
      <IfFirebaseAuthed>
        <Redirect to="/home" />
      </IfFirebaseAuthed>
      <IfFirebaseUnAuthed>
        {() => (
          <div className={classes.container} id="landing-view">
            <Nav />
            <Help />
            <div className={classes.bottom}>
              <Form mail={mail} />
              <button
                className={classes.anonymous}
                disabled={disabled}
                type="button"
                onClick={onDemoClick}>
                <span>Testez sans vous inscrire</span>
              </button>
            </div>
          </div>
        )}
      </IfFirebaseUnAuthed>
    </React.Fragment>
  );
});

export default LandingViewComponent;
