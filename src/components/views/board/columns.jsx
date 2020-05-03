import classnames from 'classnames';
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
    borderRadius: 4,
    color: '#FFFFFF',
    composes: ['p7', 'flex-1'],
    marginRight: theme.sizes.colgutter,
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
  primary: ({ theme }) => ({
    composes: ['flex-0'],
    maxWidth: theme.sizes.colwidth,
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
        <div
          className={classnames(classes.column, { [classes.primary]: true })}>
          {keys.map(key => (
            <Input
              key={key}
              primary
              id="primary"
              lang="primary-key"
              value={key}
            />
          ))}
        </div>
        {items.map(({ lang, values }) => (
          <div
            key={lang}
            className={classnames(classes.column, {
              [classes.primary]: false,
            })}>
            {values.map(([key, translation]) => (
              <Input key={key} id={key} lang={lang} value={translation} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColumnsComponent;
