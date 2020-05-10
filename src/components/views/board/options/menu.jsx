import classnames from 'classnames';
import React, { useCallback } from 'react';
import { AiOutlineClear as SwipeIcon } from 'react-icons/ai';
import { MdDelete as DeleteIcon } from 'react-icons/md';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { clearProject, deleteProject } from '../../../../redux/actions';

const useStyles = createUseStyles({
  button: {
    borderRadius: 0,
    color: '#FFFFFF',
    composes: [
      'is-block',
      'no-background',
      'flex-columns',
      'flex-between',
      'items-center',
    ],
    height: 40,
    width: '100%',
  },
  container: {
    maxWidth: 170,
    minWidth: 170,
    width: 170,
  },
  danger: ({ theme }) => ({
    color: theme.red,
    fontWeight: 'bold',
  }),
  splitter: {
    background: '#FFFFFF',
    border: 0,
    composes: ['is-block'],
    height: 1,
    opacity: 0.15,
  },
  warning: ({ theme }) => ({
    color: theme.colors.orange,
  }),
});

const ContextMenuComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const onDelete = useCallback(() => {
    dispatch(deleteProject(id));
    history.replace('/');
  }, [id, dispatch, history]);

  const onClearProject = useCallback(() => {
    dispatch(clearProject({ project: id }));
  }, [dispatch, id]);

  return (
    <div className={classes.container}>
      <button
        className={classnames(classes.button, classes.warning)}
        type="button"
        onClick={onClearProject}>
        <span>Tout effacer</span>
        <SwipeIcon className={classes.icon} />
      </button>
      <hr className={classes.splitter} />
      <button
        className={classnames(classes.button, classes.danger)}
        type="button"
        onClick={onDelete}>
        <span>Supprimer le projet</span>
        <DeleteIcon className={classes.icon} />
      </button>
    </div>
  );
});

export default ContextMenuComponent;
