import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { AiOutlineDownload as ExportIcon } from 'react-icons/ai';
import { IoMdKey as KeyIcon } from 'react-icons/io';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { LanguageIcon } from '../../../../assets/icons';
import { createKeyAsync, hydrateDraftAsync } from '../../../../redux/actions';

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
  danger: {
    color: '#000000',
    fontWeight: 'bold',
  },
  splitter: {
    background: '#FFFFFF',
    border: 0,
    composes: ['is-block'],
    height: 1,
    opacity: 0.15,
  },
  warning: {
    color: '#FFFFFF',
  },
});

const ContextMenuComponent = React.memo(({ scrollTo }) => {
  const classes = useStyles();

  const { id } = useParams();
  const history = useHistory();

  const dispatch = useDispatch();
  const onExport = useCallback(() => {}, []);

  const onAddLanguage = useCallback(() => {
    dispatch(hydrateDraftAsync({ project: id })).then(() => {
      history.push(`/import/${id}/step/2`);
    });
  }, [dispatch, id, history]);

  const onAddPrimaryKey = useCallback(() => {
    dispatch(createKeyAsync({ project: id })).then(key => {
      toast.success('Ajouté');
      scrollTo(key);
    });
  }, [id, scrollTo, dispatch]);

  return (
    <div className={classes.container}>
      <button className={classes.button} type="button" onClick={onExport}>
        <strong>Exporter</strong>
        <ExportIcon className={classes.icon} />
      </button>
      <hr className={classes.splitter} />
      <button className={classes.button} type="button" onClick={onAddLanguage}>
        <span>Ajouter une langue</span>
        <LanguageIcon className={classes.icon} />
      </button>
      {/* <Link
        className={classes.button}
        // disabled={enableAddButton}
        to={}>
      </Link> */}
      <hr className={classes.splitter} />
      <button
        className={classes.button}
        type="button"
        onClick={onAddPrimaryKey}>
        <span>Ajouter une clé</span>
        <KeyIcon className={classes.icon} />
      </button>
    </div>
  );
});

ContextMenuComponent.propTypes = {
  scrollTo: PropTypes.func.isRequired,
};

export default ContextMenuComponent;
