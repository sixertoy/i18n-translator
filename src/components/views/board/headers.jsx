import React from 'react';
import { AiOutlineEllipsis as MenuIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectHeader } from '../../../redux/selectors';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-columns', 'flex-between', 'py12', 'items-center'],
    fontFamily: ['Cinzel', 'serif'],
  },
  item: ({ theme }) => ({
    composes: ['px12', 'flex-columns', 'flex-between'],
    marginRight: theme.sizes.colgutter,
    maxWidth: theme.sizes.colwidth,
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
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.item}>
          <span>Keys</span>
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
