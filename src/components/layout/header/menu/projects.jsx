import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  container: {},
});

const ProjectsComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return <div className={classes.container} />;
};

ProjectsComponent.defaultProps = {};

ProjectsComponent.propTypes = {};

export default ProjectsComponent;
