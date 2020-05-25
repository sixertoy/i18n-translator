import React from 'react';
import { AiOutlineEllipsis as ContextIcon } from 'react-icons/ai';
import { createUseStyles } from 'react-jss';

import { px } from '../../../../core/utils';
import { USE_SEARCH } from '../../../../features.json';
import Tooltip from '../../../commons/tooltip';
import ContextMenu from './menu';
import Search from './search';
import Title from './title';

const useStyles = createUseStyles({
  button: {
    background: '#1D1D1D',
    borderRadius: 20,
    color: '#FFFFFF',
    composes: ['text-center', 'use-pointer', 'fs24'],
    height: 40,
    lineHeight: px(37),
    width: 40,
  },
  container: {
    height: 112,
    maxHeight: 112,
    minHeight: 112,
  },
  layer: {
    background: '#030303',
    color: '#FFFFFF',
    composes: ['flex-columns', 'flex-between', 'items-center', 'px32'],
    height: '100%',
    width: '100%',
  },
});

const OptionsComponent = React.memo(() => {
  const classes = useStyles();
  return (
    <div className={classes.container} id="board-options">
      <div className={classes.layer}>
        <Title />
        {USE_SEARCH && <Search />}
        <div>
          <Tooltip useHover component={<ContextMenu />} theme="light">
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
