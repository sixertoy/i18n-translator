import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import {
  selectPrimaryKeys,
  selectTranslations,
} from '../../../redux/selectors';
import PrimaryKeys from './columns/primary-keys';
import Translations from './columns/translations';

const useStyles = createUseStyles({
  container: {
    composes: ['is-scrollbox', 'fancy-scrollbar', 'pr24'],
    paddingBottom: 120,
  },
  wrapper: {
    composes: ['flex-columns'],
  },
});

const ColumnsComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const keys = useSelector(selectPrimaryKeys);
  const items = useSelector(selectTranslations);
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <PrimaryKeys items={keys} />
        <Translations items={items} />
      </div>
    </div>
  );
};

export default ColumnsComponent;
