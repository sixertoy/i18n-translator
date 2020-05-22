import get from 'lodash.get';
import PropTypes from 'prop-types';
import React from 'react';
import { AiOutlineGoogle, AiOutlineUser as UserIcon } from 'react-icons/ai';
import { GoGistSecret, GoMail, GoMarkGithub } from 'react-icons/go';
import { createUseStyles, useTheme } from 'react-jss';

import Signout from './signout';

const useStyles = createUseStyles({
  avatar: {
    '& img': {
      borderRadius: '50%',
      height: 92,
      margin: '0 auto',
      width: 92,
    },
    composes: ['is-flex', 'is-relative'],
  },
  container: {
    composes: ['pt24', 'px7', 'pb7', 'fs16'],
  },
  email: {
    color: '#959AA0',
    composes: ['is-block', 'fs14'],
  },
  infos: {
    composes: ['my24', 'py24', 'text-center'],
    letterSpacing: '0.02em',
  },
  name: {
    composes: ['is-block', 'is-bold', 'mb3'],
  },
  provider: {
    background: '#EB7496',
    borderRadius: '50%',
    bottom: 0,
    color: '#FFFFFF',
    composes: ['is-absolute', 'fs20', 'ml24', 'text-center'],
    height: 32,
    left: '50%',
    width: 32,
  },
});

function getProviderIcon(providerid) {
  switch (providerid) {
    case 'github.com':
      return GoMarkGithub;
    case 'google.com':
      return AiOutlineGoogle;
    case 'email':
      return GoMail;
    default:
      return GoGistSecret;
  }
}

const AccountComponent = React.memo(({ user }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const name = get(user, 'name', null);
  const email = get(user, 'email', null);
  const provider = get(user, 'provider', null);
  const ProviderIcon = getProviderIcon(provider);
  const photoURL = get(user, 'photoURL', null);
  const isAnonymous = get(user, 'isAnonymous', null);
  const showIcon = isAnonymous || !photoURL;

  return (
    <div className={classes.container}>
      <div className={classes.avatar}>
        {showIcon && <UserIcon />}
        {!showIcon && <img alt="user avatar" src={photoURL} />}
        <div className={classes.provider}>
          <ProviderIcon />
        </div>
      </div>
      {!isAnonymous && (
        <div className={classes.infos}>
          {name && <span className={classes.name}>{name}</span>}
          <span className={classes.email}>{email}</span>
        </div>
      )}
      {isAnonymous && <div className={classes.logins} />}
      <Signout />
    </div>
  );
});

AccountComponent.propTypes = {
  user: PropTypes.shape().isRequired,
};

export default AccountComponent;