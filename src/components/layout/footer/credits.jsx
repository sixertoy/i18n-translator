import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  credits: ({ theme }) => ({
    background: theme.colors.white,
    borderRadius: '4px 4px 0 0',
    bottom: 0,
    composes: ['pb0', 'pt5', 'px12', 'is-absolute'],
    right: 32,
    textTransform: 'uppercase',
  }),
  love: ({ theme }) => ({ color: theme.love }),
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
