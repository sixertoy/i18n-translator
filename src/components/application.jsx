import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Route, Switch } from 'react-router-dom';

import Loader from '../assets/loader';
import { IfFirebaseLoading, IfFirebaseReady } from '../core/firebase';
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

const Application = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <React.Fragment>
      <IfFirebaseReady>
        <div className={classes.application}>
          <Switch>
            {routes.map(obj => (
              <Route
                key={obj.id}
                component={obj.component}
                exact={obj.exact}
                path={obj.path}
              />
            ))}
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </IfFirebaseReady>
      <IfFirebaseLoading loader={<Loader className={classes.loader} />} />
    </React.Fragment>
  );
};

export default Application;
