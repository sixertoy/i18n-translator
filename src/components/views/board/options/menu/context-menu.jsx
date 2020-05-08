import classnames from 'classnames';
import React, { useCallback } from 'react';
import {
  AiOutlineDownload as ExportIcon,
  AiOutlinePlus as PlusIcon,
} from 'react-icons/ai';
import { IoMdKey as KeyIcon } from 'react-icons/io';
import { MdDelete as DeleteIcon } from 'react-icons/md';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

// import { useDispatch } from 'react-redux';
// import { deleteProject } from '../../../redux/actions/translations';
import {
  USE_ADD_LANGUAGE,
  USE_EXPORT_PROJECT,
} from '../../../../../features.json';

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

const ContextMenuComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  // const history = useHistory();
  // const dispatch = useDispatch();

  const onRemove = useCallback(() => {
    // dispatch(deleteProject(lang));
    // history.replace('/')
  }, []);

  return (
    <div className={classes.container}>
      <Link className={classes.button} to="/import">
        <span>Ajouter une clé</span>
        <KeyIcon className={classes.icon} />
      </Link>
      <hr className={classes.splitter} />
      {USE_ADD_LANGUAGE && (
        <React.Fragment>
          <Link className={classes.button} to="/import">
            <span>Ajouter une langue</span>
            <PlusIcon className={classes.icon} />
          </Link>
          <hr className={classes.splitter} />
        </React.Fragment>
      )}
      {USE_EXPORT_PROJECT && (
        <React.Fragment>
          <Link className={classes.button} to="/export">
            <span>Exporter</span>
            <ExportIcon className={classes.icon} />
          </Link>
          <hr className={classes.splitter} />
        </React.Fragment>
      )}
      <button
        className={classnames(classes.button, classes.danger)}
        type="button"
        onClick={onRemove}>
        <span>Supprimer le projet</span>
        <DeleteIcon className={classes.icon} />
      </button>
    </div>
  );
};

export default ContextMenuComponent;
