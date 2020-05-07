import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { AiOutlineCheck as CheckIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';

import { updateValue } from '../../../../redux/actions/translations';

const useStyles = createUseStyles({
  icon: ({ theme }) => ({
    '.notvalid &': { color: theme.red },
    color: theme.colors.gray,
    composes: ['px12', 'fs12'],
  }),
  input: ({ theme }) => ({
    '&::placeholder': { composes: ['fs12'], opacity: 0.35 },
    color: theme.font,
    composes: ['px7', 'fs14'],
    height: '100%',
    textOverflow: 'ellipsis',
    width: '100%',
  }),
  line: ({ theme }) => ({
    '&.even': { background: theme.even },
    '&.odd': { background: theme.odd },
    composes: ['flex-columns', 'flex-start', 'items-center'],
    height: theme.sizes.line,
    marginBottom: 1,
  }),
  wrapper: {},
});

const ColumnValuesComponent = ({ lang, values }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const classes = useStyles({ theme });
  return (
    <div className={classes.wrapper}>
      {values.map(([key, value], index) => {
        const odd = index % 2;
        const even = !odd;
        const notvalid = !value || value === '';
        return (
          <div
            key={key}
            className={classnames(classes.line, { even, notvalid, odd })}>
            <input
              className={classes.input}
              placeholder="Enter a value"
              type="text"
              value={value}
              onChange={evt => {
                evt.preventDefault();
                const update = evt.target.value;
                dispatch(updateValue({ key, lang, update }));
              }}
            />
            <span className={classes.icon}>
              <CheckIcon />
            </span>
          </div>
        );
      })}
    </div>
  );
};

ColumnValuesComponent.propTypes = {
  lang: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default ColumnValuesComponent;
