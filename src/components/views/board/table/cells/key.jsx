import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { AiOutlineClose as ClearIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';

import { deleteKey, updateKey } from '../../../../../redux/actions';

const useStyles = createUseStyles({
  button: ({ theme }) => ({
    '&:hover': { color: theme.active },
    background: 'transparent',
    color: theme.colors.gray,
    composes: ['pr7', 'pl12', 'is-full-height', 'is-block', 'fs12'],
    transition: 'color 0.5s',
  }),
  cell: ({ theme }) => ({
    '&.even': { background: theme.even },
    '&.odd': { background: theme.odd },
    borderRadius: '4px 0 0 4px',
    composes: ['flex-columns', 'flex-start', 'items-center'],
    height: theme.sizes.line,
    marginBottom: 1,
  }),
  input: {
    '&::placeholder': { composes: ['fs12'], opacity: 0.35 },
    composes: ['is-bold', 'px7', 'fs12', 'is-uppercase'],
    height: '100%',
    textOverflow: 'ellipsis',
    width: '100%',
  },
});

const KeyCellComponent = React.memo(({ items, odd, project, value }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const dispatch = useDispatch();

  const onDeleteKey = useCallback(() => {
    dispatch(deleteKey({ key: value, project }));
  }, [project, value, dispatch]);

  const onKeyBlur = useCallback(
    evt => {
      evt.preventDefault();
      const update = evt.target.value;
      const exists = items.includes(update);
      // NOTE renvoyer une notification d'erreur
      if (exists) return;
      dispatch(updateKey({ previous: value, project, update }));
    },
    [dispatch, items, project, value]
  );

  const scrollId = `scroll::${value}`;
  return (
    <div
      className={classnames(classes.cell, { even: !odd, odd })}
      id={scrollId}>
      <button className={classes.button} type="button" onClick={onDeleteKey}>
        <ClearIcon />
      </button>
      <input
        className={classes.input}
        defaultValue={value}
        placeholder="Enter a value"
        type="text"
        onBlur={onKeyBlur}
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
