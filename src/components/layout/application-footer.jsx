import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import { version } from '../../../package.json';

const useStyles = createUseStyles({
  baseline: {
    composes: ['mr3'],
  },
  container: ({ theme }) => ({
    backgroundColor: theme.colors.grey,
    composes: ['flex-columns', 'flex-between', 'shadow-top', 'px32', 'py0'],
  }),
  love: ({ theme }) => ({
    color: theme.colors.red,
  }),
  version: {
    composes: ['mr12'],
  },
});

const ApplicationFooter = ({ theme }) => {
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <span
        style={{
          color: '#A0A0A0',
          fontFamily: 'arial',
          fontSize: '0.55em',
          letterSpacing: '0.12em',
          lineHeight: '2.8em',
          textTransform: 'uppercase',
        }}>
        <span className={classes.version}>{`v${version}`}</span>
        <span className={classes.baseline}>
          Made with <span className={classes.love}>♥</span> and React
        </span>
      </span>
    </div>
  );
};

ApplicationFooter.propTypes = {
  theme: PropTypes.shape().isRequired,
};

export default ApplicationFooter;
