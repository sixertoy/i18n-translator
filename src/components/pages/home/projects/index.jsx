import orderBy from 'lodash.orderby';
import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';

import { selectProjects } from '../../../../redux/selectors';
import Blank from './blank';
import Item from './item';
import Toolbar from './toolbar';

const useStyles = createUseStyles({
  container: { composes: ['mb24'] },
  pills: {
    composes: ['flex-columns', 'flex-wrap'],
  },
});

const ListComponent = React.memo(() => {
  const classes = useStyles();
  const projects = useSelector(selectProjects);
  const [filter, setFilter] = useState(null);

  return (
    <div className={classes.container}>
      <Toolbar onFilter={setFilter} />
      <div className={classes.pills}>
        {projects &&
          filter &&
          orderBy(projects, [filter.prop], filter.order).map(obj => (
            <Item key={obj.id} data={obj} />
          ))}
        <Blank />
      </div>
    </div>
  );
});

export default ListComponent;
