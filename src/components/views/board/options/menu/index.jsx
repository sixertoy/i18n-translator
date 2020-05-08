import React from 'react';
import { AiOutlineEllipsis as ContextIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

import Tooltip from '../../../../commons/tooltip';
import ContextMenu from './context-menu';

const useStyles = createUseStyles({
  button: {
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 20,
    composes: ['text-center', 'use-pointer'],
    height: 40,
    lineHeight: '40px',
    width: 40,
  },
  icon: {},
  menu: {},
});

const MenuComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.menu}>
      <Tooltip component={<ContextMenu />}>
        <div className={classes.button}>
          <ContextIcon className={classes.icon} />
        </div>
      </Tooltip>
    </div>
  );
};

MenuComponent.defaultProps = {};

MenuComponent.propTypes = {};

export default MenuComponent;
