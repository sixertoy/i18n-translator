import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';

import { selectProjects } from '../../../../redux/selectors';
import Blank from './blank';
import Item from './item';

const useStyles = createUseStyles({
  factory: { composes: ['mb24'] },
  wrapper: {
    composes: ['flex-columns', 'flex-wrap'],
  },
});

const ListComponent = React.memo(() => {
  const classes = useStyles();
  const projects = useSelector(selectProjects);
  return (
    <div className={classes.factory}>
      <div className={classes.wrapper}>
        {projects.map(obj => (
          <Item key={obj.id} data={obj} />
        ))}
        <Blank />
      </div>
    </div>
  );
});

export default ListComponent;
