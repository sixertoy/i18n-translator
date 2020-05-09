import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  container: {},
});

const ProjectsComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return <div className={classes.container} />;
});

export default ProjectsComponent;
