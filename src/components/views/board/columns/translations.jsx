import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { inputStyles, lineStyles } from './styles';

const useStyles = createUseStyles({
  column: ({ theme }) => ({
    composes: ['flex-1'],
    minWidth: theme.sizes.colwidth,
    width: theme.sizes.colwidth,
  }),
  input: ({ theme }) => ({
    ...inputStyles(theme),
  }),
  line: ({ theme }) => ({
    ...lineStyles(theme),
    '.last &': { borderRadius: '0 4px 4px 0' },
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
          return (
            <div key={key} className={classnames(classes.line, { odd })}>
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
