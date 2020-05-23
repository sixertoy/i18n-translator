import get from 'lodash.get';
import React from 'react';
import { AiOutlineUser as UserIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import { rgba } from '../../../core/utils';
import { selectUser } from '../../../redux/selectors';
import Tooltip from '../../commons/tooltip';
import IdCard from './idcard';

const useStyles = createUseStyles({
  button: {
    '& .anon': { color: rgba('#FFFFFF', 0.55) },
    '& img': {
      composes: ['is-block'],
      height: 34,
      width: 34,
    },
    borderRadius: '50%',
    composes: ['is-block', 'fs16', 'no-overflow'],
    height: 34,
    width: 34,
  },
  tooltip: {
    borderRadius: '30px 9px 30px 30px',
  },
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
      useHover
      className={classes.tooltip}
      component={<IdCard user={user} />}
      offset={[0, 12]}
      placement="bottom-end"
      theme="light">
      <button className={classes.button} type="button">
        {showIcon && <UserIcon className="anon" />}
        {!showIcon && <img alt="user avatar" src={photoURL} />}
      </button>
    </Tooltip>
  );
});

export default AvatarComponent;
