import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  credits: {
    borderRadius: '4px 4px 0 0',
    bottom: 0,
    composes: ['py0', 'px12', 'debug', 'is-absolute'],
    right: 32,
    textTransform: 'uppercase',
  },
  love: ({ theme }) => ({ color: theme.colors.red }),
});

const CreditsComponents = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.credits}>
      Made with <span className={classes.love}>♥</span> and React
    </div>
  );
};

CreditsComponents.defaultProps = {};

CreditsComponents.propTypes = {};

export default CreditsComponents;
