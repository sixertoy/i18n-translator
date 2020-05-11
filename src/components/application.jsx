import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Route, Switch } from 'react-router-dom';

import routes from '../routes';
import NoMatch from './views/no-match';

const useStyles = createUseStyles({
  application: ({ theme }) => ({
    background: theme.colors.grey,
    composes: ['flex-rows', 'is-relative'],
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
              key={obj.id}
              component={obj.component}
              exact={obj.exact}
              path={obj.path}
            />
          );
        })}
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
};

Application.defaultProps = {};

Application.propTypes = {};

export default Application;
