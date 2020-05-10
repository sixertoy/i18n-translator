import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectLanguages } from '../../../../redux/selectors';
import KeysStickyColumn from './column/keys';
import ValuesColumn from './column/values';

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
        <KeysStickyColumn scroller={scroller} />
        {languages.map((item, index) => (
          <div key={`col::${item.lang}`} className={classes.column}>
            <ValuesColumn index={index} item={item} />
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
