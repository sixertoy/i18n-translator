import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  splitter: {
    composes: ['is-block', 'my24', 'text-center', 'fs18'],
  },
});

const SplitterComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <span className={classes.splitter}>
      <span>-&nbsp;ou&nbsp;-</span>
    </span>
  );
});

SplitterComponent.defaultProps = {};

SplitterComponent.propTypes = {};

export default SplitterComponent;
