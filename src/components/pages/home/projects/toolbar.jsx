import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AiFillClockCircle as ClockIcon } from 'react-icons/ai';
import {
  IoIosArrowRoundDown as DescIcon,
  IoIosArrowRoundUp as AscIcon,
} from 'react-icons/io';
import { MdSortByAlpha as AlphaIcon } from 'react-icons/md';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-columns', 'flex-end'],
  },
});

const FILTERS = [
  { label: 'Name', order: 'asc', prop: 'slug' },
  { label: 'Time', order: 'desc', prop: 'mtime' },
];

const ICONS = {
  mtime: ClockIcon,
  slug: AlphaIcon,
};

const ProjectsToolbarComponent = React.memo(({ onFilter }) => {
  const classes = useStyles();
  const mounted = useRef(false);
  const [active, setActive] = useState(0);
  const [filters, setFilters] = useState(FILTERS);

  const filterHandler = useCallback(
    index => {
      const nextFilters = filters.map((obj, idx) => {
        const isnext = idx === index;
        const isactive = index === active;
        if (!isnext || !isactive) return obj;
        return { ...obj, order: obj.order === 'desc' ? 'asc' : 'desc' };
      });
      onFilter(nextFilters[index]);
      setFilters(nextFilters);
      setActive(index);
    },
    [active, filters, onFilter]
  );

  useEffect(() => {
    if (!mounted.current) {
      onFilter(filters[0]);
      mounted.current = true;
    }
  }, [filters, onFilter]);

  return (
    <div className={classes.container}>
      <div className="filters">
        {filters.map((obj, index) => {
          const Icon = ICONS[obj.prop];
          const isactive = index === active;
          const Order = obj.order === 'desc' ? AscIcon : DescIcon;
          return (
            <button
              key={obj.prop}
              type="button"
              onClick={() => filterHandler(index)}>
              <span>{obj.label}</span>
              <Icon />
              {isactive && <Order />}
            </button>
          );
        })}
      </div>
    </div>
  );
});

ProjectsToolbarComponent.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default ProjectsToolbarComponent;
