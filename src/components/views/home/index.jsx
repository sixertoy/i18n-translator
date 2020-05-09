import React, { useEffect } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Logo from '../../../assets/logo';
import { selectLastProject } from '../../../redux/selectors';
import Create from './create';
import Login from './login';
import Signin from './signin';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    background: theme.header,
    composes: ['flex-rows', 'items-center', 'flex-center'],
  }),
  logo: {
    color: '#FFFFFF',
    composes: ['text-center'],
    fontSize: 48,
    marginBottom: 48,
  },
});

const StartViewComponent = () => {
  const theme = useTheme();
  const history = useHistory();
  const classes = useStyles({ theme });
  const project = useSelector(selectLastProject);
  const { id } = project || {};

  useEffect(() => {
    if (id) history.push(`/import/${id}`);
  }, [history, id]);

  return (
    <div className={classes.container} id="home-view">
      <div className={classes.logo}>
        <Logo />
      </div>
      <Login />
      <Create />
      <Signin />
    </div>
  );
};

export default StartViewComponent;
