import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  container: {},
});

const LogOutViewComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container} id="logout-view">
      <span>&nbsp;</span>
    </div>
  );
});

LogOutViewComponent.defaultProps = {};

LogOutViewComponent.propTypes = {};

export default LogOutViewComponent;
