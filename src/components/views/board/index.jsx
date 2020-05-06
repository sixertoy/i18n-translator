import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import withLayout from '../../layout';
import Columns from './columns';
import Headers from './headers';
import Options from './options';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-rows', 'flex-stretch'],
    height: '100%',
  },
  table: {},
  wrapper: {
    composes: ['flex-1'],
  },
});

const BoardViewComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <Options />
      <div className={classes.wrapper}>
        <div className={classes.table}>
          <Headers />
          <Columns />
        </div>
      </div>
    </div>
  );
};

export default withLayout(BoardViewComponent);
