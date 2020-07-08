import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

import Pill from './pill';

const useStyles = createUseStyles({
  item: {
    '&:hover': {
      background: '#3b1d98',
    },
    background: '#4F36A4',
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px !important',
    composes: ['is-relative', 'flex-1', 'rnd7', 'no-overflow', 'flex-rows'],
    height: '8rem',
    margin: '0 1% 1% 0',
    maxWidth: '49%',
    minWidth: '49%',
    transition: 'background 0.3s',
    width: '49%',
  },
  link: {
    '&:hover': {
      textDecoration: 'none',
    },
    color: '#FFFFFF',
    composes: ['is-block', 'is-bold', 'fs18', 'text-center', 'flex-1'],
    width: '100%',
  },
  pills: {
    composes: ['py12', 'pr12', 'pl7'],
  },
  wrapper: {
    composes: ['p12', 'flex-rows', 'flex-center'],
    height: '100%',
    lineHeight: '1.1em',
  },
  [`@media (min-width: ${861}px)`]: {
    item: {
      maxWidth: '32%',
      minWidth: '32%',
      width: '32%',
    },
  },
});

const GridComponent = React.memo(({ data, hidden }) => {
  const { id, langs = [], name } = data;
  const classes = useStyles();
  const slugified = slugify(name);
  return (
    <div
      className={classnames(classes.item, slugified, {
        hidden,
      })}>
      <Link className={classes.link} to={`/board/${id}`}>
        <div className={classes.wrapper}>
          <span>{name}</span>
        </div>
      </Link>
      <div className={classes.pills}>
        {langs.map(lang => (
          <Pill key={lang} lang={lang} />
        ))}
      </div>
    </div>
  );
});

GridComponent.defaultProps = {
  hidden: false,
};

GridComponent.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    langs: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
  }).isRequired,
  hidden: PropTypes.bool,
};

export default GridComponent;
