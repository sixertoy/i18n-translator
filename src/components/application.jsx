import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Redirect, Route, Switch } from 'react-router-dom';

import { IfFirebaseReady } from '../core/firebase';
import routes from '../routes';
import Loader from './layout/loader';

const useStyles = createUseStyles({
  application: {
    background: '#FFF',
    // background: theme.colors.background,
    composes: ['flex-rows', 'is-relative'],
    height: '100%',
  },
});

const Application = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <IfFirebaseReady loader={<Loader />}>
      <div className={classes.application}>
        <Switch>
          {routes.map(obj => {
            // const isvalid = obj.id && obj.path && obj.component;
            // TODO add to debug logger if route not valid
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
            <Redirect push={false} to="/404" />
          </Route>
        </Switch>
      </div>
    </IfFirebaseReady>
  );
});

export default Application;
