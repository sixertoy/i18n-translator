import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {},
});

const LogOutViewComponent = React.memo(() => {
  const classes = useStyles();
  return (
    <div className={classes.container} id="logout-view">
      <span>&nbsp;</span>
    </div>
  );
});

export default LogOutViewComponent;
