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
  container: ({ theme }) => ({
    background: theme.colors.grey,
    composes: ['is-scrollbox', 'fancy-scrollbar', 'pr24'],
    paddingBottom: 120,
  }),
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
