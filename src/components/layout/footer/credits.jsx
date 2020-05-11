import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  credits: ({ theme }) => ({
    background: theme.colors.white,
    borderRadius: `${theme.radius.small} ${theme.radius.small} 0 0`,
    bottom: 0,
    composes: ['is-uppercase', 'pb0', 'pt5', 'px12', 'is-absolute'],
    right: 32,
  }),
  love: ({ theme }) => ({ color: theme.colors.black }),
});

const CreditsComponents = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.credits}>
      Made with <span className={classes.love}>♥</span> and React
    </div>
  );
});

export default CreditsComponents;
