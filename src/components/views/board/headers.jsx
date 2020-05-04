import classnames from 'classnames';
import React from 'react';
import { AiOutlineEllipsis as MenuIcon } from 'react-icons/ai';
import { MdVpnKey as KeyIcon } from 'react-icons/md';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectHeader } from '../../../redux/selectors';

const useStyles = createUseStyles({
  headers: {
    composes: [
      'flex-columns',
      'flex-between',
      'py12',
      'items-center',
      'debug',
      'flex-0',
    ],
    fontFamily: ['Cinzel', 'serif'],
  },
  item: ({ theme }) => ({
    composes: ['flex-columns', 'flex-between', 'flex-1', 'fs18', 'debug'],
    marginRight: theme.sizes.colgutter,
    minWidth: theme.sizes.colwidth,
    width: theme.sizes.colwidth,
  }),
  primary: ({ theme }) => ({
    composes: ['debug'],
    flex: 0,
    maxWidth: theme.sizes.colwidth,
  }),
  wrapper: {
    composes: ['flex-columns', 'items-center', 'debug'],
  },
});

const HeadersComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const headers = useSelector(selectHeader);
  return (
    <div className={classes.headers}>
      <div className={classes.wrapper}>
        <div className={classnames(classes.item, classes.primary)}>
          <KeyIcon />
        </div>
        {headers.map(({ label, lang }) => (
          <div key={lang} className={classes.item}>
            <span>{label}</span>
            <Link to="/">
              <MenuIcon />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeadersComponent;
