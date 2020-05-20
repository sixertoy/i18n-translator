import classnames from 'classnames';
import isEmpty from 'lodash.isempty';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Item from './item';

const useStyles = createUseStyles({
  icon: {},
  label: {},
  title: {
    '& span': { marginLeft: 5, verticalAlign: 'middle' },
    '& svg': { fontSize: '1.15em' },
    composes: ['is-bold', 'mb7', 'fs16'],
  },
  wrapper: {},
});

const ProjectsGridComponent = React.memo(({ icon: Icon, items, label }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <React.Fragment>
      <h6 className={classes.title}>
        <Icon />
        <span>{label}</span>
      </h6>
      <ul className={classnames(classes.wrapper)}>
        {isEmpty(items) && <span>Aucun projet</span>}
        {items.map(obj => (
          <Item key={obj.id} data={obj} />
        ))}
      </ul>
    </React.Fragment>
  );
});

ProjectsGridComponent.propTypes = {
  icon: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  label: PropTypes.string.isRequired,
};

export default ProjectsGridComponent;
