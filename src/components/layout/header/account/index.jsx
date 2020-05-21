import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Signout from './signout';

const useStyles = createUseStyles({
  container: {},
});

const AccountComponent = React.memo(({ user }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  console.log('user', user);

  return (
    <div className={classes.container}>
      <Signout />
    </div>
  );
});

AccountComponent.propTypes = {
  user: PropTypes.shape().isRequired,
};

export default AccountComponent;
