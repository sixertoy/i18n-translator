import classnames from 'classnames';
import React, { useCallback } from 'react';
import { FiPlus as PlusIcon } from 'react-icons/fi';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createDraftAsync } from '../../../redux/actions';
import useListStyles from './styles';

const useStyles = createUseStyles({
  button: { height: 96 },
  icon: { marginLeft: 5 },
  [`@media (min-width: ${861}px)`]: {
    queryItem: {
      maxWidth: '32%',
      minWidth: '32%',
      width: '32%',
    },
    queryLink: {
      fontSize: 20,
    },
  },
  [`@media (max-width: ${981}px)`]: {
    queryLink: {
      fontSize: 18,
    },
  },
});

const BlankComponent = React.memo(() => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const history = useHistory();
  const queries = useStyles({ theme });
  const classes = useListStyles({ theme });

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
