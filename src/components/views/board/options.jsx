// import PropTypes from 'prop-types';
import React from 'react';
import {
  AiOutlineDownload as DownloadIcon,
  AiOutlinePlus as PlusIcon,
  AiOutlineSearch as SearchIcon,
  AiOutlineSortDescending as SortIcon,
} from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

import { USE_ADD_LANGUAGE } from '../../../features.json';
import Tooltip from '../../commons/tooltip';

const useStyles = createUseStyles({
  labels: {},
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
});

const MENU_ITEMS = [
  {
    Icon: SortIcon,
    path: '/board/create',
    title: 'Filtrer',
    visible: true,
  },
  {
    Icon: PlusIcon,
    path: '/board/create',
    title: 'Ajouter une langue',
    visible: USE_ADD_LANGUAGE,
  },
  {
    Icon: DownloadIcon,
    path: '/',
    title: 'Exporter',
    visible: true,
  },
].filter(({ visible }) => visible);

const OptionsComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.options}>
      <div className={classes.labels}>
        <h3 className={classes.title}>
          <span>Nom du projet</span>
        </h3>
        <div className={classes.bar}>
          <span>Pourcentage</span>
        </div>
      </div>
      <div className={classes.search}>
        <input
          className={classes.searchInput}
          placeholder="Rechercher"
          type="text"
        />
        <SearchIcon className={classes.searchIcon} />
      </div>
      <div className={classes.menu}>
        {MENU_ITEMS.map(({ Icon, path, title }) => (
          <Tooltip key={title} icon={Icon} title={title} to={path} />
        ))}
      </div>
    </div>
  );
};

export default OptionsComponent;
