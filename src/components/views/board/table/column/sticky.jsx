import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { IoMdKey as KeyIcon } from 'react-icons/io';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectPrimaryKeys } from '../../../../../redux/selectors';
import Key from '../cells/key';

const useStyles = createUseStyles({
  header: ({ theme }) => ({
    background: '#F1F1F1',
    height: theme.sizes.colheader,
    position: 'sticky',
    textAlign: 'center',
    top: 0,
    zIndex: theme.depths.colheader + 10,
  }),
  inner: {
    composes: ['fs14', 'px12', 'py18', 'is-bold', 'is-relative'],
    fontVariant: 'small-caps',
  },
  sticky: ({ theme }) => ({
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
  wrapper: {
    composes: ['is-relative'],
  },
});

const StickyComponent = React.memo(({ scroller }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const [shadow, setShadow] = useState(false);
  const [left, setLeftPosition] = useState(0);

  const { id } = useParams();
  const cells = useSelector(state => selectPrimaryKeys(state, id));

  const handleScroll = useCallback(() => {
    const { current } = scroller;
    if (!current) return;
    const { scrollLeft } = current;
    setShadow(scrollLeft > 0);
    setLeftPosition(scrollLeft);
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
    <div className={classnames(classes.sticky, { shadow })} style={{ left }}>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <div className={classes.inner}>
            <KeyIcon />
          </div>
        </div>
        {cells.map((key, index) => {
          const odd = Boolean(index % 2);
          return <Key key={key} odd={odd} project={id} value={key} />;
        })}
      </div>
    </div>
  );
});

StickyComponent.propTypes = {
  scroller: PropTypes.shape().isRequired,
};

export default StickyComponent;
