// import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Infos from './infos';
import Menu from './menu';
import Tools from './tools';

const useStyles = createUseStyles({
  options: ({ theme }) => ({
    background: theme.options,
    color: theme.font,
    composes: ['flex-columns', 'flex-between', 'items-center', 'px32'],
    height: theme.sizes.options,
    maxHeight: theme.sizes.options,
    minHeight: theme.sizes.options,
  }),
});

const OptionsComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.options}>
      <Infos />
      <Tools />
      <Menu />
    </div>
  );
};

export default OptionsComponent;
