import React from 'react';
import {
  AiOutlineClockCircle as ClockIcon,
  AiOutlineStar as StarIcon,
} from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { Redirect } from 'react-router-dom';

import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '../../../core/firebase';
import { rgba } from '../../../core/utils';
import withLayout from '../../layout';
import Favorites from './favorites';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    background: theme.app.container,
    composes: ['flex-1'],
  }),
  layer: ({ theme }) => ({
    background: rgba(theme.app.layer, 0.95),
    composes: ['flex-rows', 'is-relative'],
    height: '100%',
    paddingLeft: 300,
  }),
});

const HomeViewComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container} id="home-view">
      <IfFirebaseUnAuthed>
        <Redirect to="/" />
      </IfFirebaseUnAuthed>
      <IfFirebaseAuthed>
        {({ user }) => (
          <div className={classes.layer} user={user}>
            <Favorites />
          </div>
        )}
      </IfFirebaseAuthed>
    </div>
  );
});

HomeViewComponent.defaultProps = {};

HomeViewComponent.propTypes = {};

export default withLayout(HomeViewComponent);
