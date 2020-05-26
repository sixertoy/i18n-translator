import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { AiOutlineCheck as CheckIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';

import { KEY_CODE_ENTER } from '../../../../../constants';
import { rgba } from '../../../../../core/utils';
import { updateTranslation } from '../../../../../redux/actions';
import useTableStyles from '../styles';

const useStyles = createUseStyles({
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

const ValueCellComponent = React.memo(
  ({ id, lang, odd, project, tabIndex, value }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const tableClasses = useTableStyles({ primary: false, theme });
    const [content, setContent] = useState('');

    const dispatch = useDispatch();
    const onInputBlur = useCallback(
      evt => {
        evt.preventDefault();
        const update = { key: id, lang, project, value: content };
        dispatch(updateTranslation(update));
      },
      [id, lang, project, content, dispatch]
    );

    const onKeyDown = useCallback(
      evt => {
        const code = evt.keyCode;
        const isEnterKey = code === KEY_CODE_ENTER;
        if (!isEnterKey) return;
        const update = { key: id, lang, project, value: content };
        dispatch(updateTranslation(update));
      },
      [id, lang, project, content, dispatch]
    );

    const onInputChange = useCallback(evt => {
      evt.preventDefault();
      const update = evt.target.value;
      setContent(update);
    }, []);

    useEffect(() => {
      setContent(value);
    }, [value]);

    return (
      <div
        className={classnames(tableClasses.cell, {
          even: !odd,
          notvalid: !value || value === '',
          odd,
        })}>
        <React.Fragment>
          <input
            className={classnames(classes.input, tableClasses.input)}
            placeholder="Enter a value"
            tabIndex={tabIndex}
            type="text"
            value={content}
            onBlur={onInputBlur}
            onChange={onInputChange}
            onKeyDown={onKeyDown}
          />
          <span className={classes.icon}>
            <CheckIcon />
          </span>
        </React.Fragment>
      </div>
    );
  }
);

ValueCellComponent.propTypes = {
  id: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  odd: PropTypes.bool.isRequired,
  project: PropTypes.string.isRequired,
  tabIndex: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
};

export default ValueCellComponent;
