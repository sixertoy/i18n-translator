import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {},
});

const ExportViewComponent = () => {
  const classes = useStyles();
  return <div className={classes.container} />;
};

ExportViewComponent.defaultProps = {};

ExportViewComponent.propTypes = {};

export default ExportViewComponent;
