import get from 'lodash.get';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { FirebaseAuthConsumer } from '../../../core/firebase';

const useStyles = createUseStyles({
  container: {},
});

const FavoritesComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <FirebaseAuthConsumer>
      {({ user }) => {
        const isAnonymous = get(user, 'isAnonymous');
        return (
          <div className={classes.container}>
            <span>&nbsp;</span>
          </div>
        );
      }}
    </FirebaseAuthConsumer>
  );
});

FavoritesComponent.defaultProps = {};

FavoritesComponent.propTypes = {};

export default FavoritesComponent;
