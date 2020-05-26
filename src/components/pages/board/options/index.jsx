import classnames from 'classnames';
import React from 'react';
import { AiOutlineEllipsis as ContextIcon } from 'react-icons/ai';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { px } from '../../../../core/utils';
import { USE_SEARCH } from '../../../../features.json';
import { selectFullscreen } from '../../../../redux/selectors';
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
    '&.fullscreen': { marginTop: -112 },
    height: 112,
    marginTop: 0,
    maxHeight: 112,
    minHeight: 112,
    transition: 'margin-top 0.3s',
    zIndex: 10,
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
  const { id } = useParams();
  const fullscreen = useSelector(state => selectFullscreen(state, id));
  return (
    <div
      className={classnames(classes.container, { fullscreen })}
      id="board-options">
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
