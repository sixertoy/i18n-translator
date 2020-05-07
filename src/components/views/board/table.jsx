import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import { selectTranslations } from '../../../redux/selectors';
import Keys from './keys';
import Values from './values';

const useStyles = createUseStyles({
  table: {
    composes: ['flex-columns', 'flex-start'],
  },
});

const ScrollTableComponent = ({ scroll }) => {
  const table = useRef(null);
  const theme = useTheme({ scroll });
  const classes = useStyles({ theme });
  const translations = useSelector(selectTranslations);
  return (
    <div ref={table} className={classes.table}>
      <Keys />
      {translations.map(obj => (
        <Values key={obj.lang} data={obj} />
      ))}
    </div>
  );
};

ScrollTableComponent.defaultProps = {};

ScrollTableComponent.propTypes = {
  scroll: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number })
    .isRequired,
};

export default ScrollTableComponent;
