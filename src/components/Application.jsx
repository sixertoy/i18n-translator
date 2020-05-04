// import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Route, Switch } from 'react-router-dom';

import routes from '../routes';
import ApplicationFooter from './layout/footer';
import ApplicationHeader from './layout/header';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    background: theme.colors.blue,
    composes: ['flex-rows', 'is-full-layout'],
  }),
  footer: {
    composes: ['flex-0', 'is-full-width', 'is-flex'],
    height: 20,
    maxHeight: 20,
    minHeight: 20,
  },
  header: {
    composes: ['flex-0', 'is-full-width', 'is-flex'],
    height: 40,
    maxHeight: 40,
    minHeight: 40,
  },
  views: {
    composes: ['flex-1', 'is-flex'],
    height: 'auto',
  },
});

const Application = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <ApplicationHeader />
      </div>
      <div className={classes.views}>
        <Switch>
          {routes.map(obj => {
            return (
              <Route
                key={obj.path}
                component={obj.component}
                exact={obj.exact}
                path={obj.path}
              />
            );
          })}
        </Switch>
      </div>
      <div className={classes.footer}>
        <ApplicationFooter />
      </div>
    </div>
  );
};

Application.defaultProps = {};

Application.propTypes = {};

export default Application;
