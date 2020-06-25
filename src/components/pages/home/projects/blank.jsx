import classnames from 'classnames';
import React, { useCallback } from 'react';
import { FiPlus as PlusIcon } from 'react-icons/fi';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createDraftAsync } from '../../../../redux/actions';
import useListStyles from '../styles';

const useStyles = createUseStyles({
  button: {
    background: 'transparent',
    border: 0,
    color: '#919191',
    fontSize: '3em',
    height: 96,
  },
  icon: {
    marginLeft: 5,
  },
  item: {
    background: 'rgba(0, 0, 0, 0.02)',
    border: '1px solid rgba(0, 0, 0, 0.07)',
    composes: ['is-relative', 'flex-1', 'no-overflow', 'rnd7'],
    margin: '0 1% 1% 0',
    maxWidth: '49%',
    minWidth: '49%',
    width: '49%',
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
  const listclasses = useListStyles();

  const onCreateClick = useCallback(() => {
    dispatch(createDraftAsync()).then(id => {
      const url = `/import/${id}/step/1`;
      history.push(url);
    });
  }, [dispatch, history]);

  return (
    <li className={classnames(classes.item)}>
      <button
        className={classnames(listclasses.link, classes.button)}
        type="button"
        onClick={onCreateClick}>
        <PlusIcon className={classes.icon} />
      </button>
    </li>
  );
});

export default BlankComponent;
