import React from 'react';
import { AiOutlineClockCircle as ClockIcon } from 'react-icons/ai';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';

import { rgba } from '../../../../core/utils';
import { selectRecents } from '../../../../redux/selectors';
import Item from './item';

const useStyles = createUseStyles({
  factory: { composes: ['mb24'] },
  title: {
    '& span': { marginLeft: 5, verticalAlign: 'middle' },
    '& svg': { fontSize: '1.15em' },
    color: rgba('#000000', 0.45),
    composes: ['is-normal', 'fs12', 'mb16', 'is-uppercase'],
    letterSpacing: '0.075em',
  },
  wrapper: {
    composes: ['flex-columns', 'flex-wrap'],
  },
});

const RecentsComponent = React.memo(() => {
  const classes = useStyles();
  const recents = useSelector(selectRecents);
  const hasRecents = recents.length > 0;
  return (
    <div className={classes.factory}>
      <h3 className={classes.title}>
        <ClockIcon />
        <span>Récemment Consultés</span>
      </h3>
      {!hasRecents && (
        <div className={classes.empties}>
          <span>Vos projets récents s&apos;afficheront ici</span>
        </div>
      )}
      {hasRecents && (
        <ul className={classes.wrapper}>
          {recents.map(obj => (
            <Item key={obj.id} data={obj} />
          ))}
        </ul>
      )}
    </div>
  );
});

export default RecentsComponent;
