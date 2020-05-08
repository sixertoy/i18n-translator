import Tippy from '@tippyjs/react';
import React from 'react';
import { AiOutlineEllipsis as ContextIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

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
  tooltip: {
    borderLeft: '0 !important',
    borderRadius: '4px !important',
    borderRight: '0 !important',
    borderTop: '0 !important',
    left: '0 !important',
    padding: 7,
  },
});

const MenuComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.menu}>
      <Tippy
        hideOnClick
        interactive
        className={classes.tooltip}
        content={<ContextMenu />}
        placement="bottom"
        trigger="click"
        zIndex={999999999}>
        <div className={classes.button}>
          <ContextIcon className={classes.icon} />
        </div>
      </Tippy>
    </div>
  );
};

MenuComponent.defaultProps = {};

MenuComponent.propTypes = {};

export default MenuComponent;
