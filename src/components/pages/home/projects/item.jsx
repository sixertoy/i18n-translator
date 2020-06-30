import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
  item: {
    composes: ['is-relative', 'flex-1'],
    margin: '0 1% 1% 0',
    maxWidth: '49%',
    minWidth: '49%',
    width: '49%',
  },
  link: {
    '&:hover': {
      background: '#301D6B',
      textDecoration: 'none',
    },
    background: '#3b1d98',
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px !important',
    color: '#FFFFFF',
    composes: ['is-block', 'is-bold', 'fs18', 'text-center', 'rnd7'],
    transition: 'background 0.3s',
    width: '100%',
  },
  wrapper: {
    composes: ['p12'],
    height: 96,
  },
  [`@media (min-width: ${861}px)`]: {
    item: {
      maxWidth: '32%',
      minWidth: '32%',
      width: '32%',
    },
  },
});

const GridComponent = React.memo(({ data }) => {
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

GridComponent.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default GridComponent;
