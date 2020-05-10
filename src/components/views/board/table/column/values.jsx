import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  container: {},
});

const ValuesColumnComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div key={lang} className={classes.column}>
      <Header collapsed={collapsed} index={index} label={label} lang={lang} />
      <Values lang={lang} translations={translations} />
    </div>
  );
});

ValuesColumnComponent.defaultProps = {};

ValuesColumnComponent.propTypes = {};

export default ValuesColumnComponent;
