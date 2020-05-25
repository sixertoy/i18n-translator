import React from 'react';
import { createUseStyles } from 'react-jss';

import withLayout from '../../layout';

const useStyles = createUseStyles({
  container: {
    composes: [],
  },
});

const ExportViewComponent = () => {
  const classes = useStyles();
  return <div className={classes.container} id="export-view" />;
};

export default withLayout(ExportViewComponent);
