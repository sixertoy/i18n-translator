import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  background: ({ theme }) => ({
    background: theme.background,
  }),
  percentage: {
    composes: ['is-relative', 'no-overflow'],
  },
  progress: ({ theme }) => ({
    background: theme.header,
    composes: ['is-relative', 'is-absolute'],
  }),
});

const PercentageBarComponent = ({ count, total }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const percent = (count / 100) * total;
  return (
    <div className={classes.container}>
      <span className={classes.background} />
      <span className={classes.progress} style={{ width: `${percent}%` }} />
    </div>
  );
};

// PercentageBarComponent.defaultProps = {
//   showCounts: false
// };

PercentageBarComponent.propTypes = {
  count: PropTypes.number.isRequired,
  // showCounts: PropTypes.bool,
  total: PropTypes.number.isRequired,
};

export default PercentageBarComponent;
