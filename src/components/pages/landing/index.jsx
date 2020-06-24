import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '../../../core/firebase';
import { selectSubscribingEmail } from '../../../redux/selectors';
import Description from './description';
import Form from './form';
import Nav from './nav';
import TryForFree from './try-for-free';

const useStyles = createUseStyles({
  container: {
    composes: ['ff-roboto', 'no-flex'],
    height: '100%',
    width: '100%',
  },
  layer: ({ theme }) => ({
    background: theme.colors.gradient,
    composes: ['flex-rows', 'flex-start', 'px16', 'pt16', 'pb32'],
    minHeight: '100%',
  }),
  [`@media (max-width: ${600}px)`]: {
    layer: { padding: 12 },
  },
});

const LandingViewComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const email = useSelector(selectSubscribingEmail);
  return (
    <React.Fragment>
      <IfFirebaseAuthed>
        <Redirect to="/home" />
      </IfFirebaseAuthed>
      <IfFirebaseUnAuthed>
        <div className={classes.container} id="landing-view">
          <div className={classes.layer}>
            <Nav />
            <Description />
            <Form email={email} />
            <TryForFree />
          </div>
        </div>
      </IfFirebaseUnAuthed>
    </React.Fragment>
  );
});

export default LandingViewComponent;
