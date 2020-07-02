import get from 'lodash.get';
import React from 'react';
import { AiOutlineUser as UserIcon } from 'react-icons/ai';
import { createUseStyles } from 'react-jss';
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
    composes: ['is-block', 'fs16', 'no-overflow'],
    height: 34,
    width: 34,
  },
});

const AvatarComponent = React.memo(() => {
  const classes = useStyles();
  const user = useSelector(selectUser);
  const photoURL = get(user, 'photoURL', null);
  const isAnonymous = get(user, 'isAnonymous', null);
  const showIcon = isAnonymous || !photoURL;
  return (
    <Tooltip
      arrow={false}
      component={<IdCard user={user} />}
      offset={[0, 12]}
      placement="bottom-end"
      theme="light"
      useHover={false}>
      <button className={classes.button} type="button">
        {showIcon && (
          <React.Fragment>
            <UserIcon className="anon" />
          </React.Fragment>
        )}
        {!showIcon && <img alt="user avatar" src={photoURL} />}
      </button>
    </Tooltip>
  );
});

export default AvatarComponent;
