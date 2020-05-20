import React from 'react';
import { AiOutlineClockCircle as ClockIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import { selectRecents } from '../../../../redux/selectors';
import List from './list';

const useStyles = createUseStyles({
  list: {},
  lists: {},
});

const ProjectsComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const recents = useSelector(selectRecents);
  // const favorites = useSelector(selectFavorites);
  return (
    <div className={classes.lists}>
      <List
        className={classes.list}
        icon={ClockIcon}
        items={recents}
        label="Récemment consultés"
      />
    </div>
  );
});

export default ProjectsComponent;
