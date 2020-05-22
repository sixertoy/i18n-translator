import get from 'lodash.get';
import React from 'react';
import { AiOutlineUser as UserIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import { selectUser } from '../../../redux/selectors';
import Tooltip from '../../commons/tooltip';
import IdCard from './idcard';

const useStyles = createUseStyles({
  button: {
    '& img': {
      composes: ['is-block'],
      height: 34,
      width: 34,
    },
    borderRadius: '50%',
    composes: ['is-block'],
    fontSize: 16,
    height: 34,
    overflow: 'hidden',
    width: 34,
  },
  tooltip: ({ theme }) => ({
    borderRadius: theme.radius.small,
    composes: ['no-padding'],
    width: 280,
  }),
});

const AvatarComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const user = useSelector(selectUser);
  const photoURL = get(user, 'photoURL', null);
  const isAnonymous = get(user, 'isAnonymous', null);
  const showIcon = isAnonymous || !photoURL;
  return (
    <Tooltip
      className={classes.tooltip}
      component={<IdCard user={user} />}
      placement="bottom-end"
      theme="material">
      <button className={classes.button} type="button">
        {showIcon && <UserIcon />}
        {!showIcon && <img alt="user avatar" src={photoURL} />}
      </button>
    </Tooltip>
  );
});

export default AvatarComponent;
