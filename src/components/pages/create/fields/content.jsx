import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  container: {},
});

const ContentFieldComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <span>&nbsp;</span>
    </div>
  );
});

ContentFieldComponent.defaultProps = {};

ContentFieldComponent.propTypes = {};

export default ContentFieldComponent;
