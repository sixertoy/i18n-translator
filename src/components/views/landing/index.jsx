import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '../../../core/firebase';
import { selectSubscribingEmail } from '../../../redux/selectors';
import Demo from './demo';
import Form from './form';
import Nav from './nav';
import Text from './text';

const useStyles = createUseStyles({
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
  const classes = useStyles({ theme });
  const mail = useSelector(selectSubscribingEmail);
  return (
    <React.Fragment>
      <IfFirebaseAuthed>
        <Redirect to="/home" />
      </IfFirebaseAuthed>
      <IfFirebaseUnAuthed>
        {() => (
          <div className={classes.container} id="landing-view">
            <Nav />
            <Text />
            <div className={classes.bottom}>
              <Form mail={mail} />
              <Demo />
            </div>
          </div>
        )}
      </IfFirebaseUnAuthed>
    </React.Fragment>
  );
});

export default LandingViewComponent;
