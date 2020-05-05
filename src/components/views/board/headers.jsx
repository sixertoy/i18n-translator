import React from 'react';
import { AiOutlineEllipsis as ContextIcon } from 'react-icons/ai';
import { IoMdKey as KeyIcon } from 'react-icons/io';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import { selectHeader } from '../../../redux/selectors';

const useStyles = createUseStyles({
  headers: {
    composes: ['py12', 'flex-0'],
  },
  keys: ({ theme }) => ({
    fontSize: 18,
    maxWidth: theme.sizes.keycol,
    minWidth: theme.sizes.keycol,
    paddingLeft: 34,
    width: theme.sizes.keycol,
  }),
  values: ({ theme }) => ({
    composes: [
      'flex-columns',
      'flex-between',
      'flex-1',
      'fs14',
      'px7',
      'is-bold',
    ],
    fontVariant: 'small-caps',
    maxWidth: '65%',
    minWidth: theme.sizes.colwidth,
    width: theme.sizes.colwidth,
  }),
  wrapper: {
    composes: ['flex-columns', 'items-center'],
  },
});

const HeadersComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const headers = useSelector(selectHeader);
  return (
    <div className={classes.headers}>
      <div className={classes.wrapper}>
        <div className={classes.keys}>
          <KeyIcon />
        </div>
        {headers.map(({ label, lang }) => (
          <div key={lang} className={classes.values}>
            <span>{label}</span>
            <ContextIcon />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeadersComponent;
