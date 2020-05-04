import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import {
  selectPrimaryKeys,
  selectTranslations,
} from '../../../../redux/selectors';
import PrimaryKeys from './primary-keys';
import Translations from './translations';

const useStyles = createUseStyles({
  container: {
    composes: ['is-scrollbox-wrapper', 'flex-1', 'debug'],
  },
  inner: {
    composes: ['flex-columns', 'debug'],
  },
  scrollbox: {
    composes: ['is-scrollbox', 'fancy-scrollbar', 'pr24', 'debug'],
    paddingBottom: 120,
  },
});

const ColumnsComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const keys = useSelector(selectPrimaryKeys);
  const items = useSelector(selectTranslations);
  return (
    <div className={classes.container}>
      <div className={classes.scrollbox}>
        <div className={classes.inner}>
          <PrimaryKeys items={keys} />
          <Translations items={items} />
        </div>
      </div>
    </div>
  );
};

export default ColumnsComponent;
