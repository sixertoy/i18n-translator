import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  column: ({ theme }) => ({
    composes: ['flex-1'],
    minWidth: theme.sizes.colwidth,
    width: theme.sizes.colwidth,
  }),
  input: ({ theme }) => ({
    color: theme.colors.font,
    composes: [
      'is-block',
      'px7',
      'py7',
      'no-overflow',
      'fs14',
      'no-wrap',
      'is-full-width',
    ],
    fontFamily: ['arial', 'verdana', 'sans-serif'],
    letterSpacing: '0.05rem',
    textOverflow: 'ellipsis',
    transition: 'background 0.5s',
  }),
  line: ({ theme }) => ({
    '&.even': { background: theme.colors.even },
    '&.odd': { background: theme.colors.odd },
    '.last &': { borderRadius: '0 4px 4px 0' },
    composes: ['py12', 'no-overflow'],
    marginBottom: 1,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }),
});

const TranslationsComponent = ({ items }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const lastLang = items[items.length - 1].lang;
  return items.map(({ lang, values }) => {
    const last = lang === lastLang;
    return (
      <div key={lang} className={classnames(classes.column, { last })}>
        {values.map(([key, translation], index) => {
          const odd = index % 2;
          const even = !odd;
          return (
            <div key={key} className={classnames(classes.line, { even, odd })}>
              <input
                className={classes.input}
                defaultValue={translation}
                type="text"
                onBlur={evt => {
                  evt.preventDefault();
                  // const udpate = evt.target.value;
                  // dispatch(updateValue({ id, lang, udpate }));
                }}
              />
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
