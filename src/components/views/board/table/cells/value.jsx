import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { AiOutlineCheck as CheckIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';

import { updateTranslation } from '../../../../../redux/actions';

const useStyles = createUseStyles({
  icon: ({ theme }) => ({
    '.notvalid &': { color: theme.colors.black },
    color: theme.colors.white,
    composes: ['px12', 'fs12'],
    transition: 'color 0.5s',
  }),
  input: ({ theme }) => ({
    '&::placeholder': { composes: ['fs12'], opacity: 0.35 },
    color: theme.colors.white,
    composes: ['px7', 'fs14'],
    height: '100%',
    textOverflow: 'ellipsis',
    width: '100%',
  }),
  line: ({ theme }) => ({
    // '&.even': { background: theme.even },
    // '&.odd': { background: theme.odd },
    composes: ['flex-columns', 'flex-start', 'items-center'],
    height: theme.sizes.line,
    marginBottom: 1,
  }),
});

const ValueCellComponent = React.memo(({ id, lang, odd, project, value }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const dispatch = useDispatch();
  const onValueUpdate = useCallback(
    evt => {
      evt.preventDefault();
      const update = evt.target.value;
      const next = { key: id, lang, project, value: update };
      dispatch(updateTranslation(next));
    },
    [id, lang, project, dispatch]
  );

  return (
    <div
      className={classnames(classes.line, {
        even: !odd,
        notvalid: !value || value === '',
        odd,
      })}>
      <input
        className={classes.input}
        defaultValue={value}
        placeholder="Enter a value"
        type="text"
        onBlur={onValueUpdate}
      />
      <span className={classes.icon}>
        <CheckIcon />
      </span>
    </div>
  );
});

ValueCellComponent.propTypes = {
  id: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  odd: PropTypes.bool.isRequired,
  project: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default ValueCellComponent;
