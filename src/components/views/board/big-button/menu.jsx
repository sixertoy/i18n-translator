import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import {
  AiOutlineDownload as ExportIcon,
  AiOutlineTranslation as TranslationIcon,
} from 'react-icons/ai';
import { IoMdKey as KeyIcon } from 'react-icons/io';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { createKeyAsync } from '../../../../redux/actions';
// import { selectLimits } from '../../../../redux/selectors';

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
  // const { limited, willReach } = useSelector(state => selectLimits(state, id));
  // const enableAddButton = !limited || !willReach;

  // const history = useHistory();
  const dispatch = useDispatch();
  const onExport = useCallback(() => {
    // dispatch(deleteProject(id));
    // history.replace('/')
  }, []);

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
      <Link
        className={classes.button}
        // disabled={enableAddButton}
        to={`/import/${id}/step/2`}>
        <span>Ajouter une langue</span>
        <TranslationIcon className={classes.icon} />
      </Link>
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
