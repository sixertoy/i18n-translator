import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectHeader } from '../../../redux/selectors';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-columns', 'flex-between', 'px7', 'py12', 'items-center'],
    fontFamily: ['Cinzel', 'serif'],
  },
  item: ({ theme }) => ({
    '& + &': {
      marginLeft: 12,
    },
    composes: ['px7'],
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
          </div>
        ))}
      </div>
      <div className="">
        <Link to="/board/create">
          <button type="button">Add language</button>
        </Link>
      </div>
    </div>
  );
};

export default HeadersComponent;
