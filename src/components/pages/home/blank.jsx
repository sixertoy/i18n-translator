import classnames from 'classnames';
import React, { useCallback } from 'react';
import { FiPlus as PlusIcon } from 'react-icons/fi';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createDraftAsync } from '../../../redux/actions';
import useListStyles from './styles';

const useStyles = createUseStyles({
  button: { height: 96 },
  icon: { marginLeft: 5 },
  item: {},
  link: { fontSize: 14 },
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
  const queries = useStyles();
  const classes = useListStyles();

  const onCreateClick = useCallback(() => {
    dispatch(createDraftAsync()).then(id => {
      const url = `/import/${id}/step/1`;
      history.push(url);
    });
  }, [dispatch, history]);

  return (
    <li className={classnames(classes.item, queries.item)}>
      <button
        className={classnames(classes.link, queries.link, queries.button)}
        type="button"
        onClick={onCreateClick}>
        <span>Ajouter un projet</span>
        <PlusIcon className={queries.icon} />
      </button>
    </li>
  );
});

export default BlankComponent;
