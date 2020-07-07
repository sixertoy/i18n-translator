import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

import { database } from '../../../../core/firebase';
import Item from './item';

const useStyles = createUseStyles({
  container: { composes: ['mb24'] },
  empties: {
    border: '1px solid rgba(0, 0, 0, 0.2)',
    borderRadius: 4,
    composes: ['p12'],
  },
  title: {
    color: '#afafaf',
    composes: [
      'is-bold',
      'fs12',
      'mb16',
      'text-right',
      'is-uppercase',
      'flex-columns',
      'items-center',
    ],
  },
  wrapper: {
    composes: ['flex-columns', 'flex-wrap'],
  },
});

const RecentsComponent = React.memo(() => {
  const classes = useStyles();
  const [recents, setRecents] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      database.all('/projects').then(setRecents);
    };
    fetchData();
  }, []);
  const hasRecents = recents && recents.length > 0;
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>
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
