import classnames from 'classnames';
import get from 'lodash.get';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  selectFullscreen,
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
    minWidth: 'inherit',
    paddingBottom: 80,
  },
  table: {
    composes: ['is-overlay'],
    padding: 12,
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

  const useFullscreen = useSelector(state => selectFullscreen(state, id));
  const width = useFullscreen ? '100%' : `${languages.length * 300 + 220}px`;

  return (
    <div className={classes.table} style={{ width }}>
      <div className={classnames(classes.columns, tableClasses.columns)}>
        {<PrimaryColumn items={keys} project={id} scroller={scroller} />}
        {languages.map((language, index) => {
          const { lang } = language;
          const uniqkey = `${id}::lang::${lang}`;
          const percentage = get(percentages, lang);
          return (
            <ValuesColumn
              key={uniqkey}
              depth={index}
              item={language}
              percentage={percentage}
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
