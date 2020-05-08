import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { selectTranslations } from '../../../../redux/selectors';
import Collapsed from './columns/collapsed';
import Keys from './columns/keys';
import Values from './columns/values';
import Header from './header';

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
          {items.map(({ collapsed, label, lang, values }, index) => (
            <div key={lang} className={classes.column}>
              <Header index={index} label={label} lang={lang} />
              {!collapsed && <Values lang={lang} values={values} />}
              {collapsed && <Collapsed values={values} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TableComponent;
