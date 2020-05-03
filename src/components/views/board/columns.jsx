import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import {
  selectPrimaryKeys,
  selectTranslations,
} from '../../../redux/selectors';
import Input from './input';

const useStyles = createUseStyles({
  column: ({ theme }) => ({
    '& + &': {
      marginLeft: theme.sizes.colgutter,
    },
    background: '#000000',
    borderRadius: 4,
    color: '#FFFFFF',
    composes: ['p7'],
    maxWidth: theme.sizes.colwidth,
    minWidth: theme.sizes.colwidth,
    width: theme.sizes.colwidth,
  }),
  container: {
    composes: ['is-scrollbox'],
    paddingBottom: 120,
  },
  item: {
    '& + &': {
      marginTop: 12,
    },
    composes: ['is-block', 'px7', 'py3', 'no-overflow'],
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
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
        <div className={classes.column}>
          {keys.map(key => (
            <Input key={key} lang="primary-key" value={key} />
          ))}
        </div>
        {items.map(({ lang, values }) => (
          <div key={lang} className={classes.column}>
            {values.map(([key, translation]) => (
              <Input key={key} lang={lang} value={translation} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColumnsComponent;
