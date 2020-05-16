import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo';
import { px } from '../../core/utils';

const useStyles = createUseStyles({
  brand: ({ theme }) => ({
    '&:hover': { textDecoration: 'none !important' },
    color: theme.colors.white,
    composes: ['ff-lobster', 'is-relative', 'is-block'],
    height: 53,
    lineHeight: px(53),
    width: 'auto',
  }),
  label: {
    composes: ['fs42', 'ml42'],
  },
  svg: {
    composes: ['fs38', 'mr5', 'is-absolute'],
    top: 10,
  },
});

const BrandComponent = React.memo(({ className }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <Link className={classnames(classes.brand, className)} to="/">
      <Logo outlined className={classes.svg} />
      <span className={classes.label}>Typpo</span>
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
