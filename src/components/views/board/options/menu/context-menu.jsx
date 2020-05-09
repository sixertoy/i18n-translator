import classnames from 'classnames';
import React, { useCallback } from 'react';
import {
  AiOutlineDownload as ExportIcon,
  AiOutlineTranslation as TranslationIcon,
} from 'react-icons/ai';
import { IoMdKey as KeyIcon } from 'react-icons/io';
import { MdDelete as DeleteIcon } from 'react-icons/md';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';

import { deleteProject } from '../../../../../redux/actions';
import { selectLimits } from '../../../../../redux/selectors';

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
  }),
  splitter: {
    background: '#FFFFFF',
    border: 0,
    composes: ['is-block'],
    height: 1,
    opacity: 0.15,
  },
});

const ContextMenuComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const { id } = useParams();
  const count = useSelector(state => selectLimits(state, id));

  const nextCount = count - 1;
  const hasNoLimit = count < 0;
  const canAddSomeMore = nextCount > 0;
  const enableAddButton = hasNoLimit || canAddSomeMore;

  const history = useHistory();
  const dispatch = useDispatch();

  const onDelete = useCallback(() => {
    dispatch(deleteProject(id));
    history.replace('/home');
  }, [dispatch, history, id]);

  const onExport = useCallback(() => {
    // dispatch(deleteProject(id));
    // history.replace('/')
  }, []);

  const onAddPrimaryKey = useCallback(() => {
    // dispatch(addPrimaryKey(id));
    // history.replace('/')
  }, []);

  return (
    <div className={classes.container}>
      <button
        className={classes.button}
        type="button"
        onClick={onAddPrimaryKey}>
        <span>Ajouter une clé</span>
        <KeyIcon className={classes.icon} />
      </button>
      <hr className={classes.splitter} />
      <Link
        className={classes.button}
        disabled={enableAddButton}
        to={`/import/${id}/step/2`}>
        <span>Ajouter une langue</span>
        <TranslationIcon className={classes.icon} />
      </Link>
      <hr className={classes.splitter} />
      <button className={classes.button} type="button" onClick={onExport}>
        <span>Exporter</span>
        <ExportIcon className={classes.icon} />
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
