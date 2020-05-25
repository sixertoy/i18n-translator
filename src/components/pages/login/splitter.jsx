import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  splitter: {
    composes: ['my24', 'fs16'],
  },
});

const SplitterComponent = React.memo(() => {
  const classes = useStyles();
  return (
    <div className={classes.splitter}>
      <span>-&nbsp;ou&nbsp;-</span>
    </div>
  );
});

export default SplitterComponent;
