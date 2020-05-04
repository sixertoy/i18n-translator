// import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Route, Switch } from 'react-router-dom';

import routes from '../routes';
import ApplicationFooter from './layout/footer';
import ApplicationHeader from './layout/header';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-rows', 'flex-start'],
  },
  views: {
    composes: ['flex-1', 'is-flex', 'debug'],
  },
});

const Application = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <ApplicationHeader />
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
      <ApplicationFooter />
    </div>
  );
};

Application.defaultProps = {};

Application.propTypes = {};

export default Application;
