import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectProjects } from '../../../../redux/selectors';

const useStyles = createUseStyles({
  container: {},
});

const ProjectsComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const projects = useSelector(selectProjects);
  return (
    <div className={classes.container}>
      {projects.map(obj => {
        return (
          <div key={obj.id}>
            <Link to={`/board/${obj.id}`}>
              <span>{obj.name}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
});

export default ProjectsComponent;
