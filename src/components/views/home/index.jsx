import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Redirect } from 'react-router-dom';

import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '../../../core/firebase';
import SignOut from '../../commons/buttons/signout';
import withLayout from '../../layout';

const useStyles = createUseStyles({
  container: {},
});

const HomeViewComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container} id="home-view">
      <IfFirebaseUnAuthed>{() => <Redirect to="/" />}</IfFirebaseUnAuthed>
      <IfFirebaseAuthed>{() => <SignOut />}</IfFirebaseAuthed>
    </div>
  );
});

HomeViewComponent.defaultProps = {};

HomeViewComponent.propTypes = {};

export default withLayout(HomeViewComponent);
