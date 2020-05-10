import get from 'lodash.get';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  selectLanguages,
  selectPercentages,
  selectPrimaryKeys,
} from '../../../../redux/selectors';
import KeysColumn from './columns/keys';
import ValuesColumn from './columns/values';

const useStyles = createUseStyles({
  columns: ({ theme }) => ({
    composes: ['flex-columns', 'flex-start', 'is-relative'],
    paddingBottom: 80,
    paddingLeft: theme.sizes.colkey,
  }),
  table: {
    composes: ['is-overlay'],
  },
});

const TableComponent = React.memo(({ scroller }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const { id } = useParams();
  const keys = useSelector(state => selectPrimaryKeys(state, id));
  const languages = useSelector(state => selectLanguages(state, id));
  const percentages = useSelector(state => selectPercentages(state, id));

  return (
    <div className={classes.table}>
      <div className={classes.columns}>
        <KeysColumn items={keys} project={id} scroller={scroller} />
        {languages.map(language => {
          const { lang } = language;
          const percentage = get(percentages, lang);
          return (
            <ValuesColumn
              key={lang}
              item={language}
              percentage={percentage}
              project={id}
              {...language}
            />
          );
        })}
      </div>
    </div>
  );
});

TableComponent.propTypes = {
  scroller: PropTypes.shape().isRequired,
};

export default TableComponent;
