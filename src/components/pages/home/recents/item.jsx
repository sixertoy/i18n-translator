import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
  item: {},
  link: {
    '&:hover': { textDecoration: 'none' },
    border: '1px solid rgba(0, 0, 0, 0.07)',
    composes: ['is-block', 'py12', 'px7', 'rnd7', 'is-bold'],
  },
  name: {},
  wrapper: {},
  [`@media (min-width: ${681}px)`]: {
    item: {
      maxWidth: '100%',
      minWidth: '100%',
      width: '100%',
    },
    name: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    wrapper: { height: 'auto' },
  },
});

const ProjectItemComponent = React.memo(({ data }) => {
  const { id, name } = data;
  const classes = useStyles();
  return (
    <li className={classes.item}>
      <Link className={classes.link} to={`/board/${id}`}>
        <div className={classes.wrapper}>
          <span>{name}</span>
        </div>
      </Link>
    </li>
  );
});

ProjectItemComponent.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default ProjectItemComponent;
