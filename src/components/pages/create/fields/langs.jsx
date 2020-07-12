import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  container: {},
});

const LangsFieldComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <span>&nbsp;</span>
    </div>
  );
});

LangsFieldComponent.defaultProps = {};

LangsFieldComponent.propTypes = {};

export default LangsFieldComponent;
