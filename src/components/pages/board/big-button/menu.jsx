import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { AiOutlineDownload as ExportIcon } from 'react-icons/ai';
import { IoMdKey as KeyIcon } from 'react-icons/io';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { LanguageIcon } from '../../../../assets/icons';
import { createKeyAsync, hydrateDraftAsync } from '../../../../redux/actions';

const useStyles = createUseStyles({
  button: ({ theme }) => ({
    borderRadius: 0,
    color: theme.colors.white,
    composes: [
      'is-block',
      'no-background',
      'flex-columns',
      'flex-between',
      'items-center',
    ],
    height: 40,
    width: '100%',
  }),
  container: {
    maxWidth: 170,
    minWidth: 170,
    width: 170,
  },
  danger: ({ theme }) => ({
    color: theme.colors.black,
    fontWeight: 'bold',
  }),
  splitter: ({ theme }) => ({
    background: theme.colors.white,
    border: 0,
    composes: ['is-block'],
    height: 1,
    opacity: 0.15,
  }),
  warning: ({ theme }) => ({
    color: theme.colors.white,
  }),
});

const ContextMenuComponent = React.memo(({ scrollTo }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

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
      scrollTo(key);
    });
  }, [id, scrollTo, dispatch]);

  return (
    <div className={classes.container}>
      <button className={classes.button} type="button" onClick={onExport}>
        <span>Exporter</span>
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
