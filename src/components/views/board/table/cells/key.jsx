import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { AiOutlineClose as ClearIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';

import { rgba } from '../../../../../core/utils';
import { deleteKey, updateKey } from '../../../../../redux/actions';
import { useTableStyles } from '../../../../hooks';

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
    composes: ['is-bold', 'px7', 'fs12', 'is-uppercase'],
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
      const isEmpty = update.trim() === '';
      const isDuplicate = items.includes(update);
      setError(isDuplicate || isEmpty);
      setContent(update);
    },
    [items]
  );

  const onInputBlur = useCallback(
    evt => {
      evt.preventDefault();
      const update = evt.target.value;
      const isEqual = update === value;
      const isEmpty = update.trim() === '';
      const isDuplicate = items.includes(update);
      const hasError = !isEqual && (isEmpty || isDuplicate);
      setError(hasError);
      if (!hasError) {
        dispatch(updateKey({ previous: value, project, update }));
      }
    },
    [value, project, items, dispatch]
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
        className={classnames(classes.input, tableClasses.input, { error })}
        placeholder="Enter a value"
        type="text"
        value={content}
        onBlur={onInputBlur}
        onChange={onInputChange}
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
