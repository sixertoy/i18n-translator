import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Keys from './columns/keys';
import Header from './header';

const useStyles = createUseStyles({
  primary: ({ theme }) => ({
    composes: ['is-absolute'],
    left: 0,
    maxWidth: theme.sizes.colkey,
    minWidth: theme.sizes.colkey,
    top: 0,
    width: theme.sizes.colkey,
    zIndex: 5000,
  }),
  shadowed: {
    boxShadow: '10px 0 10px -10px rgba(0, 0, 0, 0.05);',
  },
  wrapper: {
    composes: ['is-relative'],
  },
});

const StickyComponent = React.memo(({ scroller }) => {
  const [left, setLeftPosition] = useState(0);
  const theme = useTheme();
  const classes = useStyles({ theme });

  const handleScroll = useCallback(() => {
    const { current } = scroller;
    if (!current) return;
    setLeftPosition(current.scrollLeft);
  }, [scroller]);

  useEffect(() => {
    // https://fr.reactjs.org/docs/react-api.html#reactforwardref
    const { current } = scroller;
    if (current) current.addEventListener('scroll', handleScroll);
    return () => {
      if (current) {
        current.removeEventListener('scroll', () => handleScroll);
      }
    };
  }, [handleScroll, scroller]);

  return (
    <div
      className={classnames(classes.primary, {
        [classes.shadowed]: left > 0,
      })}
      style={{ left }}>
      <div className={classes.wrapper}>
        <Header primary index={0} />
        <Keys />
      </div>
    </div>
  );
});

StickyComponent.propTypes = {
  scroller: PropTypes.shape().isRequired,
};

export default StickyComponent;
