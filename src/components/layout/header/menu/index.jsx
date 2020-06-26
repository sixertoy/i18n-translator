import PropTypes from 'prop-types';
import React from 'react';
import {
  // AiFillPushpin as PinOnIcon,
  AiOutlineClockCircle as ClockIcon,
} from 'react-icons/ai';
import { FiPlus as PlusIcon } from 'react-icons/fi';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';

import { rgba } from '../../../../core/utils';
import { selectFavorites, selectRecents } from '../../../../redux/selectors';
import { useCreateDraft } from '../../../hooks';
import Blank from './blank';
import List from './list';

const useStyles = createUseStyles({
  bottom: {
    borderRadius: 20,
    composes: ['flex-0', 'p12'],
  },
  button: {
    '& svg': { marginLeft: 7 },
    '&:hover': {
      background: rgba('#000000', 0.45),
      color: rgba('#000000', 0.45),
    },
    borderColor: rgba('#000000', 0.25),
    borderStyle: 'solid',
    borderWidth: 1,
    color: rgba('#000000', 0.25),
    composes: ['is-block', 'p12', 'no-background', 'fs14'],
    transition: 'color 0.5s, background 0.5s',
    width: '100%',
  },
  container: {
    composes: ['flex-rows', 'flex-start'],
    height: 460,
    width: 280,
  },
  lists: {
    composes: ['flex-1'],
  },
});

const ProjectsComponent = React.memo(({ onClick }) => {
  const classes = useStyles();
  const recents = useSelector(selectRecents);
  const favorites = useSelector(selectFavorites);
  const onCreateDraft = useCreateDraft();

  const showRecents = recents && recents.length > 0;
  const showFavorites = favorites && favorites.length > 0;
  const noItems = !showRecents && !showFavorites;

  return (
    <div className={classes.container}>
      <div className={classes.lists}>
        {noItems && <Blank />}
        {/* {showFavorites && (
          <List
            icon={PinOnIcon}
            items={favorites.slice(0, 3)}
            label="Épinglés"
            onClick={onClick}
          />
        )} */}
        {showRecents && (
          <List
            icon={ClockIcon}
            items={recents.slice(0, 3)}
            label="Récemment consultés"
            onClick={onClick}
          />
        )}
      </div>
      <div className={classes.bottom}>
        <button
          className={classes.button}
          type="button"
          onClick={onCreateDraft}>
          <span>Ajouter un projet</span>
          <PlusIcon />
        </button>
      </div>
    </div>
  );
});

ProjectsComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ProjectsComponent;
