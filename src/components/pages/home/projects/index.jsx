import orderBy from 'lodash.orderby';
import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

import { database } from '../../../../core/firebase';
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
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState(null);
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      database.all('/projects').then(setProjects);
    };
    fetchData();
  }, []);
  return (
    <div className={classes.container}>
      <Toolbar onFilter={setFilter} onSearch={setSearch} />
      <div className={classes.pills}>
        {projects &&
          filter &&
          orderBy(projects, [filter.prop], filter.order)
            .filter(({ slug }) => slug.indexOf(search) !== -1)
            .map(obj => <Item key={obj.id} data={obj} />)}
        <Blank />
      </div>
    </div>
  );
});

export default ListComponent;
