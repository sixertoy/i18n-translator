import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { AiOutlineCheck as CheckIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { updateTranslation } from '../../../../../redux/actions';

const useStyles = createUseStyles({
  icon: ({ theme }) => ({
    '.notvalid &': { color: theme.red },
    color: theme.colors.gray,
    composes: ['px12', 'fs12'],
    transition: 'color 0.5s',
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

const ValuesColumnComponent = ({ lang, translations }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { id: project } = useParams();
  const classes = useStyles({ theme });
  const values = Object.entries(translations);

  const onInputChange = key => evt => {
    evt.preventDefault();
    const update = evt.target.value;
    const next = { key, lang, project, value: update };
    dispatch(updateTranslation(next));
  };

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
              onChange={onInputChange(key)}
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

ValuesColumnComponent.propTypes = {
  lang: PropTypes.string.isRequired,
  translations: PropTypes.shape().isRequired,
};

export default ValuesColumnComponent;
