import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { AiOutlineClose as ClearIcon } from 'react-icons/ai';
import { MdDelete as DeleteIcon } from 'react-icons/md';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';

import {
  clearLanguage,
  removeLanguage,
} from '../../../../../redux/actions/translations';

const useStyles = createUseStyles({
  button: {
    borderRadius: 0,
    composes: ['is-block', 'no-background', 'text-left', 'px7'],
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
});

const ContextMenuComponent = ({ clearable, lang }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const dispatch = useDispatch();

  const onClear = useCallback(() => {
    dispatch(clearLanguage(lang));
  }, [dispatch, lang]);

  const onRemove = useCallback(() => {
    dispatch(removeLanguage(lang));
  }, [dispatch, lang]);

  return (
    <div className={classes.container}>
      <button
        className={classes.button}
        disabled={!clearable}
        type="button"
        onClick={onClear}>
        <ClearIcon className={classes.icon} />
        <span>Clear language</span>
      </button>
      <hr className={classes.splitter} />
      <button
        className={classnames(classes.button, classes.danger)}
        type="button"
        onClick={onRemove}>
        <DeleteIcon className={classes.icon} />
        <span>Remove language</span>
      </button>
    </div>
  );
};

ContextMenuComponent.propTypes = {
  clearable: PropTypes.bool.isRequired,
  lang: PropTypes.string.isRequired,
};

export default ContextMenuComponent;
