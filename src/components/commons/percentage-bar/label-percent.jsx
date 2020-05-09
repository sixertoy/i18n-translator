import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  label: () => ({
    composes: ['flex-1'],
  }),
});

const PercentLabelComponent = React.memo(({ percent }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const text = !Number.isNaN(percent) ? `${percent}%` : 'n/a';
  return (
    <div className={classes.label}>
      <span>{text}</span>
    </div>
  );
});

PercentLabelComponent.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default PercentLabelComponent;
