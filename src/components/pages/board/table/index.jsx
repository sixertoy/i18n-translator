import classnames from 'classnames';
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
import PrimaryColumn from './primary-col';
import useTableStyles from './styles';
import ValuesColumn from './values-col';

const useStyles = createUseStyles({
  columns: {
    composes: ['flex-columns', 'flex-start', 'is-relative'],
    paddingBottom: 80,
  },
  table: {
    composes: ['is-overlay'],
  },
});

const TableComponent = React.memo(({ scroller }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const tableClasses = useTableStyles({ theme });

  const { id } = useParams();
  const keys = useSelector(state => selectPrimaryKeys(state, id));
  const languages = useSelector(state => selectLanguages(state, id));
  const percentages = useSelector(state => selectPercentages(state, id));

  return (
    <div className={classes.table}>
      <div className={classnames(classes.columns, tableClasses.columns)}>
        {<PrimaryColumn items={keys} project={id} scroller={scroller} />}
        {languages.map((language, index) => {
          const { lang } = language;
          const percentage = get(percentages, lang);
          return (
            <ValuesColumn
              key={lang}
              depth={index}
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
