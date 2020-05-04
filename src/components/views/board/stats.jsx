// import PropTypes from 'prop-types';
import React from 'react';
import {
  AiOutlineDownload as DownloadIcon,
  AiOutlinePlus as PlusIcon,
} from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tippy';

import { USE_ADD_LANGUAGE } from '../../../features.json';

const useStyles = createUseStyles({
  container: {
    composes: ['debug'],
    flex: 0,
  },
  link: {
    composes: ['debug'],
    fontSize: 24,
  },
});

const MENU_ITEMS = [
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

const StatsComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <div>
        <span>Nom du projet</span>
      </div>
      <div>
        <span>Pourcentage</span>
      </div>
      {MENU_ITEMS.map(({ Icon, path, title }) => (
        <Tooltip
          key={title}
          arrow
          arrowSize="small"
          position="bottom-end"
          style={{ fontSize: 8 }}
          title={title}>
          <Link className={classes.link} to={path}>
            <Icon />
          </Link>
        </Tooltip>
      ))}
    </div>
  );
};

StatsComponent.defaultProps = {};

StatsComponent.propTypes = {};

export default StatsComponent;
