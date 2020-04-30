import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { getThemeByThemeKey } from '../theme';
import ApplicationFooter from './layout/application-footer';
// import ApplicationHeader from './views/ApplicationHeader';

const selectThemeFromKey = createSelector(
  state => state.theme,
  key => getThemeByThemeKey(key)
);

const useStyles = createUseStyles({
  container: {
    composes: ['is-overlay'],
  },
});

const Application = ({ version }) => {
  const theme = useSelector(selectThemeFromKey);
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <ApplicationFooter theme={theme} version={version} />
    </div>
  );
};

Application.defaultProps = {};

Application.propTypes = {
  version: PropTypes.string.isRequired,
};

export default Application;
