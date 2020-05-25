import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { AiOutlineClose as ClearIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';

import { KEY_CODE_ENTER } from '../../../../../constants';
import { rgba } from '../../../../../core/utils';
import { deleteKey, updateKey } from '../../../../../redux/actions';
import useTableStyles from '../use-table-styles';
import { checkIfIsDuplicated, checkIfIsEmpty, checkIfIsEqual } from '../utils';

const useStyles = createUseStyles({
  button: ({ theme }) => ({
    '&:hover': { color: theme.colors.danger },
    background: 'transparent',
    color: rgba(theme.colors.black, 0.25),
    composes: ['pr7', 'pl5', 'is-full-height', 'is-block', 'fs12'],
    transition: 'color 0.5s',
  }),
  cell: {
    borderRadius: '4px 0 0 4px',
  },
  input: {
    composes: ['is-bold', 'px7', 'fs12'],
  },
});

const KeyCellComponent = React.memo(({ items, odd, project, value }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [error, setError] = useState(false);
  const [content, setContent] = useState(value);
  const tableClasses = useTableStyles({ primary: true, theme });

  const dispatch = useDispatch();
  const onDeleteKey = useCallback(() => {
    dispatch(deleteKey({ key: value, project }));
  }, [dispatch, value, project]);

  const onInputChange = useCallback(
    evt => {
      evt.preventDefault();
      const update = evt.target.value;
      const isEmpty = checkIfIsEmpty(update);
      const isDuplicate = checkIfIsDuplicated(update, value, items);
      setError(isEmpty || isDuplicate);
      setContent(update);
    },
    [items, value]
  );

  const onInputBlur = useCallback(
    evt => {
      evt.preventDefault();
      const update = evt.target.value;
      const isEmpty = checkIfIsEmpty(update);
      const isEqual = checkIfIsEqual(update, value);
      const isDuplicate = checkIfIsDuplicated(update, value, items);
      const shouldUpdate = !isEqual && !isEmpty && !isDuplicate;
      if (!shouldUpdate) return;
      dispatch(updateKey({ previous: value, project, update }));
    },
    [dispatch, items, project, value]
  );

  const onKeyDown = useCallback(
    evt => {
      const code = evt.keyCode;
      const isEnterKey = code === KEY_CODE_ENTER;
      if (!isEnterKey) return;
      const update = evt.target.value;
      const isEmpty = checkIfIsEmpty(update);
      const isEqual = checkIfIsEqual(update, value);
      const isDuplicate = checkIfIsDuplicated(update, value, items);
      const shouldUpdate = !isEqual && !isEmpty && !isDuplicate;
      if (!shouldUpdate) return;
      dispatch(updateKey({ previous: value, project, update }));
    },
    [dispatch, items, project, value]
  );

  const scrollId = `scroll::${value}`;
  return (
    <div
      className={classnames(classes.cell, tableClasses.cell, {
        even: !odd,
        odd,
      })}
      id={scrollId}>
      <button
        className={classes.button}
        disabled={error}
        type="button"
        onClick={onDeleteKey}>
        <ClearIcon />
      </button>
      <input
        className={classnames(classes.input, tableClasses.input, {
          error,
          valid: !error,
        })}
        placeholder="Enter a value"
        type="text"
        value={content}
        onBlur={onInputBlur}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
});

KeyCellComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  odd: PropTypes.bool.isRequired,
  project: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default KeyCellComponent;
