import React from 'react';
import { AiOutlineProject as ProjectsIcon } from 'react-icons/ai';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';

import { rgba } from '../../../../core/utils';
import { selectProjects } from '../../../../redux/selectors';
import Blank from './blank';
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

const ListComponent = React.memo(() => {
  const classes = useStyles();
  const projects = useSelector(selectProjects);
  return (
    <div className={classes.factory}>
      <h3 className={classes.title}>
        <ProjectsIcon />
        <span>Vos Projets</span>
      </h3>
      <ul className={classes.wrapper}>
        {projects.map(obj => (
          <Item key={obj.id} data={obj} />
        ))}
        <Blank />
      </ul>
    </div>
  );
});

export default ListComponent;
