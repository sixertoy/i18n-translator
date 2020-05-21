import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo-outline.svg';

const useStyles = createUseStyles({
  brand: ({ theme }) => ({
    '& span': {
      fontSize: '2.625em',
      marginLeft: 3,
      verticalAlign: 'middle',
    },
    '& svg': {
      fontSize: '2.375em',
      verticalAlign: 'middle',
    },
    '&:hover': { textDecoration: 'none !important' },
    color: theme.colors.white,
    composes: ['ff-lobster', 'flex-columns', 'flex-start', 'items-center'],
  }),
});

const BrandComponent = React.memo(({ className }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <Link className={classnames(classes.brand, className)} to="/">
      <Logo />
      <span>Typpo</span>
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
