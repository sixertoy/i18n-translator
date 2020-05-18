import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  container: {},
});

const RecentsComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <span>&nbsp;</span>
    </div>
  );
});

RecentsComponent.defaultProps = {};

RecentsComponent.propTypes = {};

export default RecentsComponent;
