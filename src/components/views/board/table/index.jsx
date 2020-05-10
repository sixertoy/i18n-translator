import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Values from './columns/values';
import Header from './header';
import Sticky from './sticky';

const useStyles = createUseStyles({
  column: ({ theme }) => ({
    marginLeft: 1,
    maxWidth: '65%',
    minWidth: theme.sizes.colwidth,
    width: theme.sizes.colwidth,
  }),
  table: {
    composes: ['is-overlay'],
  },
  wrapper: ({ theme }) => ({
    composes: ['flex-columns', 'flex-start', 'is-relative'],
    paddingBottom: 80,
    paddingLeft: theme.sizes.colkey,
  }),
});

const TableComponent = React.memo(({ languages, scroller }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.table}>
      <div className={classes.wrapper}>
        <Sticky scroller={scroller} />
        {languages.map(({ collapsed, label, lang, translations }, index) => (
          <div key={lang} className={classes.column}>
            <Header
              collapsed={collapsed}
              index={index}
              label={label}
              lang={lang}
            />
            <Values lang={lang} translations={translations} />
          </div>
        ))}
      </div>
    </div>
  );
});

TableComponent.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  scroller: PropTypes.shape().isRequired,
};

export default TableComponent;
