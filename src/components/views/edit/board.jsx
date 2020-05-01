import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {},
});

const BoardComponent = () => {
  const classes = useStyles();
  return <div className={classes.container} />;
};

BoardComponent.defaultProps = {};

BoardComponent.propTypes = {};

export default BoardComponent;
