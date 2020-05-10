import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectLanguages } from '../../../../redux/selectors';
import Sticky from './column/sticky';
import Values from './columns/values';
import Header from './header';

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

const TableComponent = React.memo(({ scroller }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const { id } = useParams();
  const languages = useSelector(state => selectLanguages(state, id));

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
  scroller: PropTypes.shape().isRequired,
};

export default TableComponent;
