import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Login from './login';
import Projects from './projects';

const useStyles = createUseStyles({
  splitter: ({ theme }) => ({
    background: theme.colors.black,
    border: 0,
    composes: ['is-block', 'my12'],
    height: 1,
    opacity: 0.15,
  }),
  wrapper: {
    maxHeight: '100%',
  },
});

const ApplicationMenuComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div>
      <Login />
      <hr className={classes.splitter} />
      <Projects />
    </div>
  );
});

export default ApplicationMenuComponent;
