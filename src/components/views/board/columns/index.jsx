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
    composes: ['is-scrollbox-wrapper', 'flex-1', 'flex-rows'],
  },
  inner: {
    composes: ['flex-columns'],
  },
  scrollbox: {
    composes: ['is-scrollbox'],
  },
});

const ColumnsComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const keys = useSelector(selectPrimaryKeys);
  const items = useSelector(selectTranslations);
  return (
    <div className={classes.columns}>
      <div className={classes.scrollbox}>
        <div className={classes.inner}>
          <Keys items={keys} />
          {/* <Values items={items} /> */}
        </div>
      </div>
    </div>
  );
};

export default ColumnsComponent;
