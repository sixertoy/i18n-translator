import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Tooltip from '../../../commons/tooltip';
import Avatar from './avatar';
import Menu from './menu';

const useStyles = createUseStyles({
  tooltip: ({ theme }) => ({
    borderRadius: theme.radius.small,
    padding: 8,
    width: 400,
  }),
});

const AccountComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <Tooltip
      className={classes.tooltip}
      component={<Menu />}
      placement="bottom-end">
      <div>
        <Avatar />
      </div>
    </Tooltip>
  );
});

export default AccountComponent;
