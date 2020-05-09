import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {},
});

const ReactDumbComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return <div className={classes.container} />;
});

ReactDumbComponent.defaultProps = {};

ReactDumbComponent.propTypes = {};

export default ReactDumbComponent;
