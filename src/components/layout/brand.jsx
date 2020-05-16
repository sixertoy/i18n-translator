import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo';

const useStyles = createUseStyles({
  label: {
    composes: ['fs42', 'ml42'],
  },
  logo: ({ theme }) => ({
    '&:hover': { textDecoration: 'none !important' },
    color: theme.colors.white,
    composes: ['ff-lobster', 'is-relative', 'is-block'],
  }),
  svg: {
    composes: ['fs38', 'mr5', 'is-absolute'],
    top: -10,
  },
});

const BrandComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <Link className={classes.logo} to="/">
      <Logo outlined className={classes.svg} />
      <span className={classes.label}>Typpo</span>
    </Link>
  );
});

BrandComponent.defaultProps = {};

BrandComponent.propTypes = {};

export default BrandComponent;
