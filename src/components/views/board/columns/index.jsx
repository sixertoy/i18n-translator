import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import {
  selectPrimaryKeys,
  selectTranslations,
} from '../../../../redux/selectors';
import Keys from './keys';
import Values from './values';

const useStyles = createUseStyles({
  columns: {
    composes: [],
  },
});

const ColumnsComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const keys = useSelector(selectPrimaryKeys);
  const items = useSelector(selectTranslations);
  return (
    <div className={classes.columns}>
      <Keys items={keys} />
      <Values items={items} />
    </div>
  );
};

export default ColumnsComponent;
