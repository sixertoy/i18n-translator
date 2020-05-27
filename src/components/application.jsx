import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Redirect, Route, Switch } from 'react-router-dom';

import { IfFirebaseReady } from '../core/firebase';
import routes from '../routes';
import Loader from './commons/loader';

const useStyles = createUseStyles({
  application: ({ theme }) => ({
    background: theme.colors.background,
    composes: ['flex-rows', 'is-relative'],
    height: '100%',
  }),
  loader: {
    color: '#000000',
    display: 'block',
  },
});

const Application = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <IfFirebaseReady loader={<Loader className={classes.loader} />}>
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
