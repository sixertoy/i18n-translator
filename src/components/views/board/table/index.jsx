import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { selectTranslations } from '../../../../redux/selectors';
import Header from './header';
import Keys from './keys';
import Values from './values';

const useStyles = createUseStyles({
  // column: ({ theme }) => ({
  //   minWidth: theme.sizes.colkey,
  //   width: theme.sizes.colkey,
  // }),
  column: ({ theme }) => ({
    marginLeft: 1,
    maxWidth: '65%',
    minWidth: theme.sizes.colwidth,
    width: theme.sizes.colwidth,
  }),
  table: {
    composes: ['flex-columns', 'flex-start'],
  },
});

const TableComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const items = useSelector(selectTranslations);
  const hasItems = Boolean(items && items.length);
  if (!hasItems) return <Redirect to="/" />;
  return (
    <div className={classes.table}>
      <Keys />
      {items.map(({ label, lang, values }) => (
        <div className={classes.column}>
          <Header label={label} lang={lang} />
          <Values key={lang} lang={lang} values={values} />
        </div>
      ))}
    </div>
  );
};

export default TableComponent;
