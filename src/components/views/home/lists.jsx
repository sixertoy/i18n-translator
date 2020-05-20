import React from 'react';
import { AiOutlineClockCircle as ClockIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import { selectRecents } from '../../../redux/selectors';
import List from '../../commons/projects/list';

const useStyles = createUseStyles({
  lists: {
    composes: ['flex-0'],
    height: '100%',
    maxWidth: 250,
    minWidth: 250,
    width: 250,
  },
});

const ListsComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const recents = useSelector(selectRecents);
  const historics = recents.slice(0, 10);

  return (
    <div className={classes.lists}>
      <List icon={ClockIcon} items={historics} label="Récemment consultés" />
    </div>
  );
});

export default ListsComponent;
