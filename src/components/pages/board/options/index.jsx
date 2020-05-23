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
  container: ({ theme }) => ({
    background: theme.colors.black,
    height: 112,
    maxHeight: 112,
    minHeight: 112,
  }),
  layer: ({ theme }) => ({
    background: rgba(theme.colors.white, 0.01),
    color: theme.colors.white,
    composes: ['flex-columns', 'flex-between', 'items-center', 'px32'],
    height: '100%',
    width: '100%',
  }),
});

const OptionsComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.container} id="board-options">
      <div className={classes.layer}>
        <Title />
        <Search />
        <div>
          <Tooltip useHover component={<ContextMenu />} theme="material">
            <div className={classes.button}>
              <ContextIcon />
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
});

export default OptionsComponent;
