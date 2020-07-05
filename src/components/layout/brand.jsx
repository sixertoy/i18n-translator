import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo-outline.svg';

const useStyles = createUseStyles({
  brand: {
    '& span': {
      fontSize: '2.625em',
      marginLeft: 7,
      verticalAlign: 'middle',
    },
    '& svg': {
      fontSize: '2.375em',
      verticalAlign: 'middle',
    },
    '&:hover': { textDecoration: 'none !important' },
    color: '#D70566',
    composes: ['ff-lobster', 'flex-columns', 'flex-start', 'items-center'],
  },
});

const BrandComponent = React.memo(({ className }) => {
  const classes = useStyles();
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
