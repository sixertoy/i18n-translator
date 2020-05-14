import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Tooltip from '../../../commons/tooltip';
import UserButton from './button';
import UserAccount from './user';

const useStyles = createUseStyles({
  container: {},
  tooltip: ({ theme }) => ({
    borderRadius: theme.radius.small,
    padding: 8,
  }),
  wrapper: {},
});

const AccountComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container} id="header-account">
      <Tooltip
        className={classes.tooltip}
        component={<UserAccount />}
        placement="bottom-end">
        <div className={classes.wrapper}>
          <UserButton />
        </div>
      </Tooltip>
    </div>
  );
});

export default AccountComponent;