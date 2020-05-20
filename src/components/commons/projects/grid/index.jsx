import classnames from 'classnames';
// import isEmpty from 'lodash.isempty';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Item from './item';

const useStyles = createUseStyles({
  container: {},
  title: {
    '& span': { marginLeft: 5, verticalAlign: 'middle' },
    '& svg': { fontSize: '1.15em' },
    composes: ['is-bold', 'fs16'],
  },
  wrapper: {
    composes: ['mt7', 'flex-columns', 'flex-wrap'],
  },
});

const ProjectsGridComponent = React.memo(({ icon: Icon, items, label }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  // const isempty = isEmpty(items);
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>
        <Icon />
        <span>{label}</span>
      </h3>
      <ul className={classnames(classes.wrapper)}>
        {items.map(obj => (
          <Item key={obj.id} data={obj} />
        ))}
      </ul>
    </div>
  );
});

ProjectsGridComponent.defaultProps = {};

ProjectsGridComponent.propTypes = {
  icon: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  label: PropTypes.string.isRequired,
};

export default ProjectsGridComponent;
