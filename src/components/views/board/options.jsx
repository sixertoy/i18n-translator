// import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import React from 'react';
import {
  AiOutlineDownload as ExportIcon,
  AiOutlineEllipsis as ContextIcon,
  AiOutlinePlus as PlusIcon,
  AiOutlineSearch as SearchIcon,
  AiOutlineSortDescending as SortIcon,
} from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  USE_ADD_LANGUAGE,
  USE_CONTEXT_PROJECT,
  USE_EXPORT,
  USE_PROJECTS,
  USE_SEARCH,
  USE_SORT,
} from '../../../features.json';
import { selectPercentages } from '../../../redux/selectors';

const useStyles = createUseStyles({
  context: {
    composes: ['fs18'],
  },
  filter: {
    composes: ['fs24', 'ml12'],
  },
  labels: {},
  link: ({ theme }) => ({
    color: theme.font,
    composes: ['fs24', 'ml7'],
  }),
  menu: {},
  options: ({ theme }) => ({
    background: theme.options,
    color: theme.font,
    composes: ['flex-columns', 'flex-between', 'px32', 'items-center'],
    height: theme.sizes.options,
    maxHeight: theme.sizes.options,
    minHeight: theme.sizes.options,
  }),
  search: ({ theme }) => ({
    background: theme.colors.white,
    borderRadius: 16,
    composes: ['flex-columns', 'flex-end', 'items-center', 'px12'],
    height: 32,
    maxWidth: 260,
    minWidth: 260,
    width: 260,
  }),
  searchIcon: {
    height: '100%',
  },
  searchInput: {
    composes: ['is-block', 'mr7'],
    height: '100%',
    width: '100%',
  },
  title: ({ theme }) => ({
    color: theme.triangle,
    composes: ['is-bold'],
  }),
  wrapper: {
    composes: ['flex-columns', 'items-center', 'flex-center'],
  },
});

const OptionsComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { project } = useSelector(selectPercentages);
  return (
    <div className={classes.options}>
      <div className={classes.labels}>
        {USE_PROJECTS && (
          <h3 className={classes.title}>
            <span>Nom du projet</span>
            {USE_CONTEXT_PROJECT && (
              <button className={classes.context} type="button">
                <ContextIcon />
              </button>
            )}
          </h3>
        )}
        <div className={classes.bar}>
          <span>{project.percent}</span>
        </div>
      </div>
      <div className={classes.wrapper}>
        {USE_SEARCH && (
          <div className={classes.search}>
            <input
              className={classes.searchInput}
              placeholder="Rechercher"
              type="text"
            />
            <SearchIcon className={classes.searchIcon} />
          </div>
        )}
        {USE_SORT && (
          <button className={classes.filter} type="button" onClick={() => {}}>
            <SortIcon />
          </button>
        )}
      </div>
      <div className={classes.menu}>
        {USE_ADD_LANGUAGE && (
          <Tippy
            content="Ajouter une langue"
            offset={[10, 10]}
            placement="bottom-end">
            <Link className={classes.link} to="/board/create">
              <PlusIcon />
            </Link>
          </Tippy>
        )}
        {USE_EXPORT && (
          <Tippy content="Exporter" offset={[10, 10]} placement="bottom-end">
            <Link className={classes.link} to="/export">
              <ExportIcon />
            </Link>
          </Tippy>
        )}
      </div>
    </div>
  );
};

export default OptionsComponent;
