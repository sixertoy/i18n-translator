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
  button: {
    borderRadius: 20,
    composes: ['text-center'],
  },
  container: {
    composes: ['flex-columns', 'flex-between', 'mb12'],
  },
  label: {
    composes: ['fs10', 'is-uppercase'],
  },
  search: {
    border: '1px solid rgba(0, 0, 0, 0.15)',
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

const ProjectsToolbarComponent = React.memo(({ onFilter, onSearch }) => {
  const classes = useStyles();
  const mounted = useRef(false);
  const [active, setActive] = useState(0);
  const [filters, setFilters] = useState(FILTERS);

  const searchHandler = useCallback(
    evt => {
      const { value } = evt.target;
      const lower = value.toLowerCase();
      const trimmed = lower.trim();
      onSearch(trimmed);
    },
    [onSearch]
  );

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
      <div className={classes.search}>
        <input type="text" onChange={searchHandler} />
      </div>
      <div className="filters">
        {filters.map((obj, index) => {
          const Icon = ICONS[obj.prop];
          const isactive = index === active;
          const Order = obj.order === 'desc' ? AscIcon : DescIcon;
          return (
            <button
              key={obj.prop}
              className={classes.button}
              type="button"
              onClick={() => filterHandler(index)}>
              <span className={classes.label}>{obj.label}</span>
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
  onSearch: PropTypes.func.isRequired,
};

export default ProjectsToolbarComponent;
