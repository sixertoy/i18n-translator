import React from 'react';
import { AiOutlineUser as UserIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

import Tooltip from '../../../commons/tooltip';

const useStyles = createUseStyles({
  container: {
    composes: [],
  },
});

const AccountComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container} id="header-account">
      <Tooltip
        arrow={false}
        className={classes.tooltip}
        component={<div>toto</div>}
        placement="bottom-start">
        <button className={classes.button} type="button">
          <UserIcon />
        </button>
      </Tooltip>
    </div>
  );
});

export default AccountComponent;
