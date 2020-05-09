import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  label: () => ({
    composes: ['flex-1'],
  }),
});

const CountLabelComponent = React.memo(({ count, total }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const text = total && total > 0 ? `${count}/${total}` : 'n/a';
  return (
    <div className={classes.label}>
      <span>{text}</span>
    </div>
  );
});

CountLabelComponent.propTypes = {
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default CountLabelComponent;
