import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    composes: ['is-overlay'],
  },
});

const Application = () => {
  const classes = useStyles();
  return <div className={classes.container} />;
};

Application.defaultProps = {};

Application.propTypes = {};

export default Application;
