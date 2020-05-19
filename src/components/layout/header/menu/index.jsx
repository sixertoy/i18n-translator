import React from 'react';
import { MdHome as HomeIcon } from 'react-icons/md';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

import List from './list';

const useStyles = createUseStyles({
  button: ({ theme }) => ({
    '& + &': { marginLeft: 4 },
    // background: theme.colors.black,
    background: 'hsla(0,0%,100%,.3)',
    // color: theme.colors.white,
    borderRadius: theme.radius.small,
    color: theme.colors.white,
    composes: ['is-block', 'fs16', 'is-bold', 'text-center', 'p7'],
    lineHeight: '1.25em',
    transition: 'background 0.5s',
    width: 'auto',
  }),
  container: {
    composes: ['no-flex'],
  },
  wrapper: {
    composes: ['flex-columns', 'flex-start', 'items-center'],
  },
});

const ApplicationMenuComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container} id="header-menu">
      <div className={classes.wrapper}>
        <Link className={classes.button} to="/">
          <HomeIcon className="fs20" />
        </Link>
        <List className={classes.button} />
      </div>
    </div>
  );
});

export default ApplicationMenuComponent;
