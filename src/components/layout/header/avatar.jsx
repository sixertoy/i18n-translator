import get from 'lodash.get';
import React from 'react';
import { AiOutlineUser as UserIcon } from 'react-icons/ai';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';

import { selectUser } from '../../../redux/selectors';
import Tooltip from '../../commons/tooltip';
import IdCard from './idcard';

const useStyles = createUseStyles({
  button: {
    '& .icon': {
      color: '#E61E4D',
      marginLeft: 8,
      marginRight: 8,
    },
    '& img': {
      borderRadius: '50%',
      composes: ['is-block'],
      height: 30,
      marginLeft: 8,
      width: 30,
    },
    border: '1px solid #EDEDED',
    borderRadius: 20,
    composes: [
      'is-block',
      'fs16',
      'p5',
      'no-overflow',
      'flex-columns',
      'items-center',
    ],
    height: 42,
    paddingLeft: '16px !important',
  },
  name: {
    fontSize: '0.8em',
    fontWeight: 600,
  },
});

const AvatarComponent = React.memo(() => {
  const classes = useStyles();
  const user = useSelector(selectUser);
  // const name = get(user, 'name', 'Invité');
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
        <span className={classes.name}>Invité</span>
        {showIcon && <UserIcon className="icon" />}
        {!showIcon && <img alt="user avatar" src={photoURL} />}
      </button>
    </Tooltip>
  );
});

export default AvatarComponent;
