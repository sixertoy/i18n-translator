import classnames from 'classnames';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import { rgba } from '../../../core/utils/colors';
import {
  selectPrimaryKeys,
  selectTranslations,
} from '../../../redux/selectors';
import Input from './input';

const useStyles = createUseStyles({
  column: ({ theme }) => ({
    borderRadius: 4,
    color: theme.sizes.white,
    composes: ['flex-1'],
    // marginRight: theme.sizes.colgutter,
    minWidth: theme.sizes.colwidth,
    width: theme.sizes.colwidth,
  }),
  container: {
    composes: ['is-scrollbox', 'fancy-scrollbar', 'pr24'],
    paddingBottom: 120,
  },
  item: {
    composes: ['is-block', 'px7', 'no-overflow'],
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  // leftColumn: {
  //   '& > *': {
  //     borderRadius: '4px 0 0 4px',
  //     composes: ['is-block'],
  //     height: '100%',
  //     width: 12,
  //   },
  //   composes: ['flex-0'],
  //   height: '100%',
  //   maxWidth: '12px !important',
  //   minHeight: '100%',
  //   minWidth: '12px !important',
  //   width: '12px !important',
  // },
  primary: ({ theme }) => ({
    composes: ['flex-0'],
    maxWidth: theme.sizes.colwidth,
  }),
  stripe: ({ theme }) => ({
    '&.odd': { background: rgba(theme.colors.white, 0.25) },
    background: 'transparent',
    composes: ['p7'],
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
        {/* <div className={classnames(classes.column, classes.leftColumn)}>
          {keys.map(key => (
            <div key={key}>&nbsp;</div>
          ))}
        </div> */}
        <div
          className={classnames(classes.column, { [classes.primary]: true })}>
          {keys.map((key, index) => (
            <div
              key={key}
              className={classnames(classes.stripe, { odd: index % 2 })}>
              <Input id="primary" lang="primary-key" value={key} />
            </div>
          ))}
        </div>
        {items.map(({ lang, values }) => (
          <div
            key={lang}
            className={classnames(classes.column, {
              [classes.primary]: false,
            })}>
            {values.map(([key, translation], index) => (
              <div
                key={key}
                className={classnames(classes.stripe, { odd: index % 2 })}>
                <Input id={key} lang={lang} value={translation} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColumnsComponent;
