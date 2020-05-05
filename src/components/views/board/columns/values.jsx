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
  input: {
    composes: ['px7', 'fs14'],
    height: '100%',
    textOverflow: 'ellipsis',
    width: '100%',
  },
  line: ({ theme }) => ({
    '&.even': { background: theme.colors.even },
    '&.odd': { background: theme.colors.odd },
    borderRadius: '4px 0 0 4px',
    composes: ['flex-columns', 'no-overflow', 'items-center'],
    height: theme.sizes.line,
    marginBottom: 1,
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
