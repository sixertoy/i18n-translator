// import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Redirect, Route, Switch } from 'react-router-dom';

import routes from '../routes';

const useStyles = createUseStyles({
  application: ({ theme }) => ({
    background: theme.background,
    composes: ['flex-rows', 'flex-stretch'],
    height: '100%',
  }),
});

const Application = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.application}>
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
        <Redirect to="/home" />
      </Switch>
    </div>
  );
};

Application.defaultProps = {};

Application.propTypes = {};

export default Application;
