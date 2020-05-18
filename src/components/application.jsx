import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Route, Switch } from 'react-router-dom';

import Loader from '../assets/loader';
import { IfFirebaseReady } from '../core/firebase';
import routes from '../routes';
import NoMatch from './views/no-match';

const useStyles = createUseStyles({
  application: ({ theme }) => ({
    background: theme.colors.white,
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
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </IfFirebaseReady>
  );
});

export default Application;
