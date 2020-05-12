import React from 'react';
import { AiOutlineEllipsis as ContextIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

import { px, rgba } from '../../../../core/utils';
import Tooltip from '../../../commons/tooltip';
import ContextMenu from './menu';
import Search from './search';
import Title from './title';

const useStyles = createUseStyles({
  button: ({ theme }) => ({
    background: rgba(theme.colors.white, 0.1),
    borderRadius: 20,
    color: theme.colors.white,
    composes: ['text-center', 'use-pointer', 'fs24'],
    height: 40,
    lineHeight: px(37),
    width: 40,
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
            <ContextIcon />
          </div>
        </Tooltip>
      </div>
    </div>
  );
});

export default OptionsComponent;
