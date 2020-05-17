import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  splitter: {
    composes: ['my24', 'fs16'],
  },
});

const SplitterComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.splitter}>
      <span>-&nbsp;ou&nbsp;-</span>
    </div>
  );
});

export default SplitterComponent;
