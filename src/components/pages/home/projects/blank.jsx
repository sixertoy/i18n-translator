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
    background: '#F2F2F2',
    border: '1px solid #DFDFE0',
    color: '#919191',
    fontSize: '3em',
    height: 96,
  },
  icon: { marginLeft: 5 },
  item: {},
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
