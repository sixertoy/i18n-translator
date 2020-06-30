import React, { useCallback } from 'react';
import { FiPlus as PlusIcon } from 'react-icons/fi';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createDraftAsync } from '../../../../redux/actions';

const useStyles = createUseStyles({
  icon: {
    marginLeft: 5,
  },
  item: {
    composes: ['is-relative', 'flex-1'],
    margin: '0 1% 1% 0',
    maxWidth: '49%',
    minWidth: '49%',
    width: '49%',
  },
  link: {
    '&:hover': {
      color: '#301D6B',
      textDecoration: 'none',
    },
    background: '#FFF',
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px !important',
    color: '#3b1d98',
    composes: ['text-center', 'is-block', 'rnd7'],
    fontSize: '3em',
    height: 96,
    transition: 'color 0.3s',
    width: '100%',
  },
  [`@media (min-width: ${861}px)`]: {
    item: {
      maxWidth: '32%',
      minWidth: '32%',
      width: '32%',
    },
  },
});

const BlankComponent = React.memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const onCreateClick = useCallback(() => {
    dispatch(createDraftAsync()).then(id => {
      const url = `/import/${id}/step/1`;
      history.push(url);
    });
  }, [dispatch, history]);

  return (
    <li className={classes.item}>
      <button className={classes.link} type="button" onClick={onCreateClick}>
        <PlusIcon className={classes.icon} />
      </button>
    </li>
  );
});

export default BlankComponent;
