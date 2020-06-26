import classnames from 'classnames';
import React from 'react';
import { AiOutlineEllipsis as ContextIcon } from 'react-icons/ai';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { px } from '../../../../core/utils';
import { USE_SEARCH } from '../../../../features.json';
import { selectFullscreen } from '../../../../redux/selectors';
// import FavoriteButton from '../../../commons/buttons/favorite';
import Tooltip from '../../../commons/tooltip';
import ContextMenu from './menu';
import Search from './search';
import Title from './title';

const useStyles = createUseStyles({
  button: {
    '&:hover': { background: 'hsla(0, 0%, 100%, 0.1)' },
    background: 'hsla(0, 0%, 100%, 0.06)',
    borderRadius: 20,
    color: '#FFFFFF',
    composes: ['text-center', 'use-pointer', 'fs24', 'ml7'],
    height: 40,
    lineHeight: px(37),
    transition: 'background 0.3s',
    width: 40,
  },
  container: {
    '&.fullscreen': { marginTop: -112 },
    height: 112,
    marginTop: 0,
    maxHeight: 112,
    minHeight: 112,
    transition: 'margin-top 0.3s',
  },
  layer: {
    background: '#030303',
    color: '#FFFFFF',
    composes: ['flex-columns', 'flex-between', 'items-center', 'px32'],
    height: '100%',
    width: '100%',
  },
  wrapper: {
    composes: ['flex-columns', 'flex-end', 'items-center', 'flex-0'],
    maxWidth: 90,
    minWidth: 90,
    width: 90,
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
        <div className={classes.wrapper}>
          {/* <FavoriteButton project={id} /> */}
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
