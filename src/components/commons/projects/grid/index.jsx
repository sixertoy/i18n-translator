import classnames from 'classnames';
import isEmpty from 'lodash.isempty';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Item from './item';

const useStyles = createUseStyles({
  icon: {},
  label: {
    composes: ['is-bold'],
  },
  list: {
    marginBottom: 24,
  },
  title: {
    marginBottom: 24,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
});

const ProjectsGridComponent = React.memo(
  ({ children, icon: Icon, items, label }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const isempty = isEmpty(items);
    return (
      <div className={classes.list}>
        <h3 className={classes.title}>
          <Icon className={classes.icon} />
          <span className={classes.label}>{label}</span>
        </h3>
        <ul className={classnames(classes.wrapper)}>
          {isempty && children}
          {items.map(obj => (
            <Item key={obj.id} data={obj} />
          ))}
        </ul>
      </div>
    );
  }
);

ProjectsGridComponent.defaultProps = {
  children: null,
};

ProjectsGridComponent.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  label: PropTypes.string.isRequired,
};

export default ProjectsGridComponent;
