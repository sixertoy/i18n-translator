import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';

import {
  clearLanguage,
  removeLanguage,
} from '../../../../../redux/actions/translations';

const useStyles = createUseStyles({
  container: {
    composes: ['p12'],
    maxWidth: 240,
    minWidth: 240,
    width: 240,
  },
});

const ContextMenuComponent = ({ lang }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onClear = useCallback(() => {
    dispatch(clearLanguage(lang));
  }, [dispatch, lang]);

  const onRemove = useCallback(() => {
    dispatch(removeLanguage(lang));
  }, [dispatch, lang]);

  return (
    <div className={classes.container}>
      <button type="button" onClick={onClear}>
        <span>Clear</span>
      </button>
      <button type="button" onClick={onRemove}>
        <span>Remove</span>
      </button>
    </div>
  );
};

ContextMenuComponent.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default ContextMenuComponent;
