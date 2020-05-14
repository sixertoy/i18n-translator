import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
  container: {
    composes: ['text-center', 'fs24', 'is-absolute', 'use-lobster'],
    left: 0,
    lineHeight: 'inherit',
    margin: '0 auto',
    right: 0,
    width: 100,
  },
  link: ({ theme }) => ({
    color: theme.colors.white,
    composes: ['is-block'],
  }),
  // svg: ({ theme }) => ({
  //   color: theme.colors.white,
  //   composes: ['is-inline-block', 'mr5'],
  //   fill: theme.colors.white,
  //   height: 28,
  //   width: 28,
  // }),
});

const LogoComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <h1 className={classes.container} id="header-title">
      <Link className={classes.link} to="/">
        {/* <svg
            className={classes.svg}
            viewBox="0 0 510 510"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M470.012 379.743S353.102 157.52 121.302 51.1c0 0-8.877-3.389-10.99 5.01-2.113 8.398 8.14 9.715 13.988 15.029 5.85 5.313 196.923 114.895 345.712 360.705L485 496.972l-4.996 13.025-83.93-102.2s-208.598 7.279-298.75-159.311c0 0 63.372-18.325 80.931-17.034 0 0-44.299-29.872-98.917-18.035l-20.983-51.1s13.326-17.767 72.94-26.05c0 0-48.676-28.926-83.93-11.022v2.004S21.578 43.024 25.383-.001c0 0 139.43 14.515 211.823 51.1 0 0-7.022 30.478 29.975 54.107 0 0-6.936-31.735 2.998-42.083 0 0 256.39 100.123 199.833 316.62z" />
          </svg> */}
        <span>Lobster</span>
      </Link>
    </h1>
  );
});

export default LogoComponent;