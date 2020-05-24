import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { AiOutlineCheck as CheckIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';

import { rgba } from '../../../../../core/utils';
import { updateTranslation } from '../../../../../redux/actions';
import useTableStyles from '../use-table-styles';

const useStyles = createUseStyles({
  cell: {},
  icon: ({ theme }) => ({
    '.notvalid &': { color: theme.colors.danger },
    color: rgba(theme.colors.black, 0.25),
    composes: ['px12', 'fs12'],
    transition: 'color 0.5s',
  }),
  input: {
    composes: ['px7', 'fs14'],
  },
});

const ValueCellComponent = React.memo(({ id, lang, odd, project, value }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const tableClasses = useTableStyles({ primary: false, theme });
  const [translation, setTranslation] = useState(value);

  const dispatch = useDispatch();
  const onInputBlur = useCallback(
    evt => {
      evt.preventDefault();
      const next = { key: id, lang, project, value: translation };
      dispatch(updateTranslation(next));
    },
    [id, lang, project, translation, dispatch]
  );

  const onInputChange = useCallback(evt => {
    evt.preventDefault();
    const update = evt.target.value;
    setTranslation(update);
  }, []);

  return (
    <div
      className={classnames(classes.cell, tableClasses.cell, {
        even: !odd,
        notvalid: !value || value === '',
        odd,
      })}>
      <input
        className={classnames(classes.input, tableClasses.input)}
        placeholder="Enter a value"
        type="text"
        value={translation}
        onBlur={onInputBlur}
        onChange={onInputChange}
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
