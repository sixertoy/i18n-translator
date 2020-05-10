import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import {
  AiOutlineClear as SwipeIcon,
  AiOutlineCopy as CloneIcon,
} from 'react-icons/ai';
import { MdDelete as DeleteIcon } from 'react-icons/md';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  clearLanguage,
  // cloneLanguage,
  deleteLanguage,
} from '../../../../../redux/actions';

const useStyles = createUseStyles({
  button: {
    borderRadius: 0,
    composes: [
      'is-block',
      'no-background',
      'flex-columns',
      'flex-between',
      'items-center',
    ],
    height: 40,
    lineHeight: '40px',
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
  icon: {
    composes: ['mr7'],
  },
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

const ContextMenuComponent = React.memo(({ clearable, lang }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { id: project } = useParams();
  const dispatch = useDispatch();

  const onClone = useCallback(() => {
    // dispatch(cloneLanguage(lang));
  }, []);

  const onClear = useCallback(() => {
    dispatch(clearLanguage({ lang, project }));
  }, [lang, project, dispatch]);

  const onDelete = useCallback(() => {
    dispatch(deleteLanguage({ lang, project }));
  }, [lang, project, dispatch]);

  return (
    <div className={classes.container}>
      <button className={classes.button} type="button" onClick={onClone}>
        <span>Clone language</span>
        <CloneIcon className={classes.icon} />
      </button>
      <hr className={classes.splitter} />
      <button
        className={classnames(classes.button, classes.warning)}
        disabled={!clearable}
        type="button"
        onClick={onClear}>
        <span>Clear language</span>
        <SwipeIcon className={classes.icon} />
      </button>
      <hr className={classes.splitter} />
      <button
        className={classnames(classes.button, classes.danger)}
        type="button"
        onClick={onDelete}>
        <span>Remove language</span>
        <DeleteIcon className={classes.icon} />
      </button>
    </div>
  );
});

ContextMenuComponent.propTypes = {
  clearable: PropTypes.bool.isRequired,
  lang: PropTypes.string.isRequired,
};

export default ContextMenuComponent;
