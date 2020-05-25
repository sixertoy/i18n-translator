import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { IoMdKey as KeyIcon } from 'react-icons/io';
import { createUseStyles, useTheme } from 'react-jss';

import { useScroller } from '../../../hooks';
import KeyCell from './cells/key';
import useTableStyles from './use-table-styles';

const useStyles = createUseStyles({
  column: {
    '&.shadow': {
      boxShadow: '10px 0 10px -10px rgba(0, 0, 0, 0.05);',
    },
    composes: ['is-absolute'],
    left: 0,
    top: 0,
  },
  header: {
    composes: ['is-absolute', 'text-center'],
  },
  inner: {
    composes: ['fs14', 'px12', 'py18', 'is-bold', 'is-relative'],
    fontVariant: 'small-caps',
  },
  wrapper: {
    composes: ['is-relative'],
  },
});

const PrimaryColumnComponent = React.memo(({ items, project, scroller }) => {
  const theme = useTheme();
  const classes = useStyles();
  const tableClasses = useTableStyles({ primary: true, theme });

  const { left, shadow } = useScroller(scroller);

  return (
    <div
      className={classnames(
        classes.column,
        tableClasses.column,
        'primary-keys',
        { shadow }
      )}
      style={{ left }}>
      <div className={classes.wrapper}>
        <div className={classnames(classes.header, tableClasses.header)}>
          <div className={classes.inner}>
            <KeyIcon />
          </div>
        </div>
        {items.map((key, index) => {
          const tabIndex = index + 1;
          const odd = Boolean(index % 2);
          return (
            <KeyCell
              key={key}
              items={items}
              odd={odd}
              project={project}
              tabIndex={tabIndex}
              value={key}
            />
          );
        })}
      </div>
    </div>
  );
});

PrimaryColumnComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  project: PropTypes.string.isRequired,
  scroller: PropTypes.shape().isRequired,
};

export default PrimaryColumnComponent;
