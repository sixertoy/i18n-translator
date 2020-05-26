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
  const useFullscreen = languages.find(obj => obj.fullscreen);
  const width = languages.length * 300;
  return (
    <div className={classes.table}>
      <div
        className={classnames(classes.columns, tableClasses.columns)}
        style={{ width: useFullscreen ? 'inherit' : `${width}px` }}>
        {<PrimaryColumn items={keys} project={id} scroller={scroller} />}
        {languages.map((language, index) => {
          const { clearable, fullscreen, label, lang, translations } = language;
          const uniqkey = `${id}::lang::${lang}`;
          const percentage = get(percentages, lang);
          return (
            <ValuesColumn
              key={uniqkey}
              clearable={clearable}
              depth={index}
              fullscreen={useFullscreen && fullscreen}
              hidden={useFullscreen && !fullscreen}
              item={language}
              label={label}
              lang={lang}
              percentage={percentage}
              project={id}
              translations={translations}
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
