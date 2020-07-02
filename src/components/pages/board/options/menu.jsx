import classnames from 'classnames';
import React, { useCallback } from 'react';
import { AiOutlineCopy as CloneIcon } from 'react-icons/ai';
import { MdDelete as DeleteIcon } from 'react-icons/md';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { SwipeIcon } from '../../../../assets/icons';
import {
  clearProject,
  cloneProject,
  deleteProject,
} from '../../../../redux/actions';

const useStyles = createUseStyles({
  button: {
    '&:hover': {
      color: '#FFFFFF !important',
    },
    color: '#909192',
    composes: [
      'is-block',
      'no-background',
      'flex-columns',
      'flex-between',
      'items-center',
    ],
    width: '100%',
  },
  container: {
    maxWidth: 170,
    minWidth: 170,
    width: 170,
  },
  danger: ({ theme }) => ({
    color: theme.colors.danger,
    fontWeight: 'bold',
  }),
  warning: ({ theme }) => ({
    color: theme.colors.warning,
  }),
});

const ContextMenuComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const { id } = useParams();

  const history = useHistory();
  const dispatch = useDispatch();
  const onDelete = useCallback(() => {
    dispatch(deleteProject({ project: id }));
    history.replace('/home');
  }, [dispatch, id, history]);

  const onClearProject = useCallback(() => {
    dispatch(clearProject({ project: id }));
  }, [dispatch, id]);

  const onCloneProject = useCallback(() => {
    dispatch(cloneProject({ project: id })).then(project => {
      toast.success('Copié');
      const url = `/board/${project}`;
      history.push(url);
    });
  }, [dispatch, history, id]);

  return (
    <div className={classes.container}>
      <button className={classes.button} type="button" onClick={onCloneProject}>
        <span>Duplicate</span>
        <CloneIcon className={classes.icon} />
      </button>
      <button
        className={classnames(classes.button, classes.warning)}
        type="button"
        onClick={onClearProject}>
        <span>Tout effacer</span>
        <SwipeIcon className={classes.icon} />
      </button>
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
