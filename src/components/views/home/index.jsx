import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  container: {},
});

const HomeViewComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container} id="home-view">
      <span>&nbsp;</span>
    </div>
  );
});

HomeViewComponent.defaultProps = {};

HomeViewComponent.propTypes = {};

export default HomeViewComponent;
