import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo';

const useStyles = createUseStyles({
  brand: ({ theme }) => ({
    '&:hover': { textDecoration: 'none !important' },
    color: theme.colors.white,
    composes: ['ff-lobster', 'is-relative', 'is-block'],
    height: '3.4em',
    lineHeight: '3.4em',
    width: 'auto',
  }),
  svg: {
    composes: ['is-absolute'],
    fontSize: '2.375em',
    top: '0.3em',
  },
  title: {
    fontSize: '2.625em',
    marginLeft: '1em',
  },
});

const BrandComponent = React.memo(({ className }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <Link className={classnames(classes.brand, className)} to="/">
      <Logo outlined className={classes.svg} />
      <span className={classes.title}>Typpo</span>
    </Link>
  );
});

BrandComponent.defaultProps = {
  className: '',
};

BrandComponent.propTypes = {
  className: PropTypes.string,
};

export default BrandComponent;
