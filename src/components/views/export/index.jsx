import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import withLayout from '../../layout';

const useStyles = createUseStyles({
  container: {
    composes: [],
  },
});

const ExportViewComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return <div className={classes.container} id="export-view" />;
};

export default withLayout(ExportViewComponent);
