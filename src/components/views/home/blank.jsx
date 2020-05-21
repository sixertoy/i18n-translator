import classnames from 'classnames';
import React, { useCallback } from 'react';
import { AiOutlinePlus as PlusIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createProjectAsync } from '../../../redux/actions';

const useStyles = createUseStyles({
  item: {
    borderRadius: 3,
    composes: ['is-relative', 'flex-1', 'no-overflow'],
    margin: '0 1% 1% 0',
    maxWidth: '49%',
    minWidth: '49%',
    width: '49%',
  },
  name: {
    composes: ['is-block', 'no-overflow'],
    maxHeight: '100%',
  },
  wrapper: {
    background: '#FAFBFC',
    color: '#42526E',
    composes: ['is-block', 'py12', 'pl12', 'no-overflow'],
    fontSize: 14,
    height: 96,
    paddingRight: 30,
    width: '100%',
  },
  [`@media (min-width: ${861}px)`]: {
    item: {
      maxWidth: '32%',
      minWidth: '32%',
      width: '32%',
    },
    link: {
      fontSize: 20,
    },
  },
  [`@media (max-width: ${981}px)`]: {
    link: {
      fontSize: 18,
    },
  },
});

const BlankComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const dispatch = useDispatch();
  const history = useHistory();

  const onCreateClick = useCallback(() => {
    dispatch(createProjectAsync()).then(id => {
      const url = `/import/${id}/step/1`;
      history.push(url);
    });
  }, [dispatch, history]);

  return (
    <li className={classnames(classes.item, 'fadein')}>
      <button className={classes.wrapper} type="button" onClick={onCreateClick}>
        <PlusIcon />
        <span>Ajouter un projet</span>
      </button>
    </li>
  );
});

export default BlankComponent;
