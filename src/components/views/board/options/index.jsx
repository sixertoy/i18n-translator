import React from 'react';
import { AiOutlineEllipsis as ContextIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

import Tooltip from '../../../commons/tooltip';
import ContextMenu from './menu';
import Search from './search';
import Title from './title';

const useStyles = createUseStyles({
  button: ({ theme }) => ({
    background: theme.colors.white,
    borderRadius: 20,
    composes: ['text-center', 'use-pointer'],
    height: 40,
    lineHeight: '40px',
    width: 40,
  }),
  icon: ({ theme }) => ({
    color: theme.colors.white,
    composes: ['fs24'],
  }),
  options: ({ theme }) => ({
    background: theme.colors.black,
    color: theme.colors.white,
    composes: ['flex-columns', 'flex-between', 'items-center', 'px32'],
    height: 112,
    maxHeight: 112,
    minHeight: 112,
  }),
});

const OptionsComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.options}>
      <Title />
      <Search />
      <div>
        <Tooltip component={<ContextMenu />}>
          <div className={classes.button}>
            <ContextIcon className={classes.icon} />
          </div>
        </Tooltip>
      </div>
    </div>
  );
});

export default OptionsComponent;
