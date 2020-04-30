import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  baseline: {
    composes: ['mr3'],
  },
  container: ({ theme }) => ({
    backgroundColor: theme.colors.grey,
    composes: [
      'flex-columns',
      'flex-between',
      'shadow-top',
      'px32',
      'py0',
      'is-full-width',
    ],
    height: 20,
  }),
  love: ({ theme }) => ({
    color: theme.colors.red,
  }),
  version: {
    composes: ['mr12'],
  },
});

const ApplicationFooter = ({ theme, version }) => {
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
  version: PropTypes.string.isRequired,
};

export default ApplicationFooter;
