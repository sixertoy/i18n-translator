import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

// import Collapsed from './columns/collapsed';
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
    paddingBottom: 80,
  },
});

const TableComponent = React.memo(({ languages }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.table}>
      <div className={classes.wrapper}>
        <div className={classes.primary}>
          <Header primary index={0} />
          <Keys />
        </div>
        {languages.map(({ label, lang, translations }, index) => (
          <div key={lang} className={classes.column}>
            <Header index={index} label={label} lang={lang} />
            <Values lang={lang} translations={translations} />
          </div>
        ))}
      </div>
    </div>
  );
});

TableComponent.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default TableComponent;
