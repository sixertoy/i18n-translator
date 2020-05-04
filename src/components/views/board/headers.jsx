import classnames from 'classnames';
import React from 'react';
import { AiOutlineEllipsis as MenuIcon } from 'react-icons/ai';
import { MdVpnKey as KeyIcon } from 'react-icons/md';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectHeader } from '../../../redux/selectors';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-columns', 'flex-between', 'py12', 'items-center'],
    fontFamily: ['Cinzel', 'serif'],
  },
  header: ({ theme }) => ({
    composes: ['flex-columns', 'flex-between', 'flex-1', 'fs18'],
    marginRight: theme.sizes.colgutter,
    minWidth: theme.sizes.colwidth,
    width: theme.sizes.colwidth,
  }),
  primary: ({ theme }) => ({
    flex: 0,
    justifyContent: 'center',
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
        <div className={classnames(classes.header, classes.primary)}>
          <KeyIcon />
        </div>
        {headers.map(({ label, lang }) => (
          <div key={lang} className={classes.header}>
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
