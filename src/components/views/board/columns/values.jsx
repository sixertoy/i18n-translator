import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { AiOutlineCheck as CheckIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';

import { updateValue } from '../../../../redux/actions/translations';

const useStyles = createUseStyles({
  column: ({ theme }) => ({
    composes: ['flex-1'],
    marginLeft: 1,
    maxWidth: '65%',
    minWidth: theme.sizes.colwidth,
    width: theme.sizes.colwidth,
  }),
  icon: ({ theme }) => ({
    '.notvalid &': { color: theme.red },
    color: theme.colors.gray,
    composes: ['px12', 'fs12'],
  }),
  input: ({ theme }) => ({
    color: theme.font,
    composes: ['px7', 'fs14'],
    height: '100%',
    textOverflow: 'ellipsis',
    width: '100%',
  }),
  line: ({ theme }) => ({
    '&.even': { background: theme.even },
    '&.odd': { background: theme.odd },
    // '.last &': { borderRadius: '0 4px 4px 0' },
    // borderRadius: '4px 0 0 4px',
    composes: ['flex-columns', 'no-overflow', 'items-center'],
    height: theme.sizes.line,
    marginBottom: 1,
  }),
});

const TranslationsComponent = ({ items }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const classes = useStyles({ theme });
  const lastLang = items[items.length - 1].lang;
  return items.map(({ lang, values }) => {
    const last = lang === lastLang;
    return (
      <div key={lang} className={classnames(classes.column, { last })}>
        {values.map(([key, translation], index) => {
          const odd = index % 2;
          const even = !odd;
          const notvalid = !translation || translation === '';
          return (
            <div
              key={key}
              className={classnames(classes.line, { even, notvalid, odd })}>
              <input
                className={classes.input}
                placeholder="Enter a value"
                type="text"
                value={translation}
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
  });
};

TranslationsComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default TranslationsComponent;
