import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { IoMdKey as KeyIcon } from 'react-icons/io';
import { createUseStyles, useTheme } from 'react-jss';

import { useScroller } from '../../../../hooks';
import Key from '../cells/key';

const useStyles = createUseStyles({
  column: ({ theme }) => ({
    '&.shadow': {
      boxShadow: '10px 0 10px -10px rgba(0, 0, 0, 0.05);',
    },
    composes: ['is-absolute'],
    left: 0,
    maxWidth: theme.sizes.colkey,
    minWidth: theme.sizes.colkey,
    top: 0,
    width: theme.sizes.colkey,
    zIndex: theme.depths.colheader + 20,
  }),
  header: ({ theme }) => ({
    background: theme.colors.white,
    composes: ['is-absolute', 'text-center'],
    height: theme.sizes.colheader,
    position: 'sticky',
    top: 0,
    zIndex: theme.depths.colheader + 10,
  }),
  inner: {
    composes: ['fs14', 'px12', 'py18', 'is-bold', 'is-relative'],
    fontVariant: 'small-caps',
  },
  wrapper: {
    composes: ['is-relative'],
  },
});

const StickyComponent = React.memo(({ items, project, scroller }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { left, shadow } = useScroller(scroller);

  return (
    <div className={classnames(classes.column, { shadow })} style={{ left }}>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <div className={classes.inner}>
            <KeyIcon />
          </div>
        </div>
        {items.map((key, index) => {
          const odd = Boolean(index % 2);
          return (
            <Key
              key={key}
              items={items}
              odd={odd}
              project={project}
              value={key}
            />
          );
        })}
      </div>
    </div>
  );
});

StickyComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  project: PropTypes.string.isRequired,
  scroller: PropTypes.shape().isRequired,
};

export default StickyComponent;
