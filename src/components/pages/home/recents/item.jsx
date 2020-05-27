import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

import useListStyles from '../styles';

const useStyles = createUseStyles({
  item: {},
  link: {},
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
  const queries = useStyles();
  const classes = useListStyles();
  return (
    <li className={classnames(classes.item, queries.item, 'fadein')}>
      <Link
        className={classnames(classes.link, queries.link)}
        to={`/board/${id}`}>
        <div className={classnames(classes.wrapper, queries.wrapper)}>
          <span className={classnames(classes.name, queries.name)}>{name}</span>
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
