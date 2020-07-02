import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    background: 'hsla(0, 0%, 100%, 0.1)',
    borderRadius: 20,
    color: '#FFFFFF',
    composes: ['px5', 'py5', 'fs8', 'is-bold', 'text-center'],
    width: 40,
  },
});

const PillItemComponent = React.memo(({ lang }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const splitted = lang.split('-');
  return (
    <div className={classes.container}>
      <span>{splitted[1]}</span>
    </div>
  );
});

PillItemComponent.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default PillItemComponent;
