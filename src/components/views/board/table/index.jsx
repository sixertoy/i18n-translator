import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { selectTranslations } from '../../../../redux/selectors';
import Header from './header';
import Keys from './keys';
import Values from './values';

const useStyles = createUseStyles({
  column: ({ theme }) => ({
    marginLeft: 1,
    maxWidth: '65%',
    minWidth: theme.sizes.colwidth,
    width: theme.sizes.colwidth,
  }),
  primary: ({ theme }) => ({
    maxWidth: theme.sizes.colkey,
    minWidth: theme.sizes.colkey,
    width: theme.sizes.colkey,
  }),
  table: {
    composes: ['is-overlay'],
  },
  wrapper: {
    composes: ['flex-columns', 'flex-start'],
  },
});

function checkIfLanguagesAreEmpties(items) {
  const isempty = Boolean(!items || !items.length);
  return isempty;
}

const TableComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const items = useSelector(selectTranslations);
  const isEmpty = checkIfLanguagesAreEmpties(items);
  return (
    <div className={classes.table}>
      {isEmpty && <Redirect to="/" />}
      {!isEmpty && (
        <div className={classes.wrapper}>
          <div className={classes.primary}>
            <Header primary index={0} />
            <Keys />
          </div>
          {items.map(({ label, lang, values }, index) => {
            const clearable =
              values.map(arr => arr[1]).filter(v => v && v !== '').length > 0;
            return (
              <div key={lang} className={classes.column}>
                <Header
                  clearable={clearable}
                  index={index}
                  label={label}
                  lang={lang}
                />
                <Values lang={lang} values={values} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TableComponent;