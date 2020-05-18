import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
  container: {},
});

const ProjectItemComponent = React.memo(({ data }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const url = `/board/${data.id}`;
  return (
    <div className={classes.container}>
      <Link to={url}>
        <span>{data.name}</span>
      </Link>
    </div>
  );
});

ProjectItemComponent.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default ProjectItemComponent;
