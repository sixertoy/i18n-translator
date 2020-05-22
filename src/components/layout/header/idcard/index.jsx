import get from 'lodash.get';
import PropTypes from 'prop-types';
import React from 'react';
import {
  AiOutlineGoogle,
  AiOutlineLike as LikeIcon,
  AiOutlineUser as UserIcon,
} from 'react-icons/ai';
import { GoGistSecret, GoMail, GoMarkGithub } from 'react-icons/go';
import { createUseStyles, useTheme } from 'react-jss';

import { rgba } from '../../../../core/utils';
import GithubLogin from '../../../commons/buttons/github';
import GoogleLogin from '../../../commons/buttons/google';
import Signout from './signout';

const img = {
  borderRadius: '50%',
  height: 92,
  margin: '0 auto',
  width: 92,
};

const useStyles = createUseStyles({
  avatar: {
    '& .anon': {
      background: '#000000',
      color: rgba('#FFFFFF', 0.25),
      extend: img,
    },
    '& img': { extend: img },
    composes: ['is-flex', 'is-relative'],
  },
  container: {
    composes: ['pt24', 'px7', 'pb7', 'fs16'],
  },
  email: {
    color: '#959AA0',
    composes: ['is-block', 'fs14'],
  },
  help: {
    '& .icon': {
      fontSize: 24,
      left: 12,
      position: 'absolute',
      top: 12,
    },
    borderColor: rgba('#000000', 0.25),
    borderStyle: 'dashed',
    borderWidth: 1,
    color: '#959AA0',
    composes: [
      'mb24',
      'is-normal',
      'fs14',
      'p12',
      'text-left',
      'is-relative',
      'pl48',
    ],
  },
  infos: {
    composes: ['py24', 'text-center'],
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
    composes: ['is-absolute', 'fs20', 'text-center'],
    height: 32,
    left: '56%',
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
        {showIcon && <UserIcon className="anon" />}
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
      {isAnonymous && (
        <div className={classes.infos}>
          <p className={classes.help}>
            Profitez de tous les avantages de <strong>Typpo</strong> en vous
            inscrivant, sauvegarder vos projets, ajouter des langues, exporter
            dans plusieurs formats
            <LikeIcon className="icon" />
          </p>
          <GithubLogin useSignup />
          <GoogleLogin useSignup className="mt7" />
        </div>
      )}
      <Signout />
    </div>
  );
});

AccountComponent.propTypes = {
  user: PropTypes.shape().isRequired,
};

export default AccountComponent;
