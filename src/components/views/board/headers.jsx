import classnames from 'classnames';
import React from 'react';
import { AiOutlineEllipsis as MenuIcon } from 'react-icons/ai';
import { MdVpnKey as KeyIcon } from 'react-icons/md';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectHeader } from '../../../redux/selectors';

const useStyles = createUseStyles({
  column: ({ theme }) => ({
    composes: ['px12', 'flex-columns', 'flex-between', 'flex-1'],
    marginRight: theme.sizes.colgutter,
    minWidth: theme.sizes.colwidth,
    width: theme.sizes.colwidth,
  }),
  container: {
    composes: ['flex-columns', 'flex-between', 'py12', 'items-center'],
    fontFamily: ['Cinzel', 'serif'],
  },
  primary: ({ theme }) => ({
    composes: ['flex-0', 'fs18'],
    maxWidth: theme.sizes.colwidth,
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
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div
          className={classnames(classes.column, { [classes.primary]: true })}>
          <KeyIcon />
        </div>
        {headers.map(({ label, lang }) => (
          <div
            key={lang}
            className={classnames(classes.column, {
              [classes.primary]: false,
            })}>
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
