import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  dot: {},
  preloader: {
    composes: ['flex-1'],
    display: 'flex',
    height: 80,
    margin: '10% auto 0',
    width: 80,
  },
});

const loader = React.memo(() => {
  const classes = useStyles();
  return (
    <div className={classes.preloader}>
      <div className="cyclin-loader">
        <div className={classes.dot} />
        <div className={classes.dot} />
        <div className={classes.dot} />
        <div className={classes.dot} />
      </div>
    </div>
  );
});

export default loader;
