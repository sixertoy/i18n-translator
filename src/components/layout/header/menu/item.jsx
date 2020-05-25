import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

import { rgba } from '../../../../core/utils';

const useStyles = createUseStyles({
  item: {
    '& + $item': {
      borderTopColor: rgba('#000000', 0.25),
      borderTopStyle: 'solid',
      borderTopWidth: 1,
    },
    composes: ['py12', 'mt0'],
  },
  link: {
    '&:hover': { textDecoration: 'none' },
    color: '#959AA0',
    composes: ['fs16', 'is-bold'],
  },
  name: {},
});

const ProjectItemComponent = React.memo(({ data, onClick }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
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
    isFavorite: PropTypes.bool,
    langs: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProjectItemComponent;
