import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

import { rgba } from '../../../../core/utils';

const useStyles = createUseStyles({
  item: {
    '& + $item': {
      borderTopColor: rgba('#000000', 0.45),
      borderTopStyle: 'solid',
      borderTopWidth: 1,
    },
    composes: ['py12', 'mt0'],
  },
  link: {
    '&:hover': { textDecoration: 'none' },
    color: rgba('#000000', 0.45),
    composes: ['fs16', 'is-bold'],
  },
  name: {},
});

const ProjectItemComponent = React.memo(({ data, onClick }) => {
  const classes = useStyles();
  const url = `/board/${data.id}`;
  return (
    <li className={classes.item}>
      <Link className={classes.link} to={url} onClick={onClick}>
        <div className={classes.name}>{data.name}</div>
      </Link>
    </li>
  );
});

ProjectItemComponent.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProjectItemComponent;
